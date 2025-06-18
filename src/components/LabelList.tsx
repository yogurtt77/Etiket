import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/redux";
import { COLORS, SPACING } from "@/shared/constants/theme";
import { APP_CONFIG } from "@/shared/constants/app";
import LabelItem from "./LabelItem";
import type { Label } from "@/types/label";

const ListContainer = styled.div`
  background: ${COLORS.gradients.card};
  padding: ${SPACING.xl};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;
`;

const ListTitle = styled.h2`
  margin: 0;
  color: ${COLORS.neutral.dark};
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${COLORS.primary} 0%,
    ${COLORS.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterInput = styled.input`
  padding: 8px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  min-width: 200px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 480px) {
    min-width: 150px;
  }
`;

const ExportButton = styled.button`
  padding: 8px 16px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #138496;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  font-size: 14px;
  color: #666;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #999;
  font-style: italic;
`;

const LabelList: React.FC = () => {
  const { labels } = useAppSelector((state) => state.labels);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLabels = labels.filter((label: Label) =>
    label.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportToJSON = () => {
    const exportData = {
      app: APP_CONFIG.APP_NAME,
      version: APP_CONFIG.APP_VERSION,
      exportDate: new Date().toISOString(),
      totalLabels: labels.length,
      labels: labels,
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `${APP_CONFIG.EXPORT.FILE_PREFIX}-${
      new Date().toISOString().split("T")[0]
    }.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const getUniqueColors = () => {
    const colors = new Set();
    labels.forEach((label: Label) => {
      colors.add(label.textColor);
      colors.add(label.backgroundColor);
    });
    return colors.size;
  };

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>📋 Коллекция этикеток ({filteredLabels.length})</ListTitle>
        <FilterContainer>
          <FilterInput
            type="text"
            placeholder="Поиск по тексту..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {labels.length > 0 && (
            <ExportButton onClick={handleExportToJSON}>
              📥 Экспорт данных
            </ExportButton>
          )}
        </FilterContainer>
      </ListHeader>

      {labels.length > 0 && (
        <StatsContainer>
          <StatItem>
            <strong>Всего:</strong> {labels.length}
          </StatItem>
          <StatItem>
            <strong>Найдено:</strong> {filteredLabels.length}
          </StatItem>
          <StatItem>
            <strong>Уникальных цветов:</strong> {getUniqueColors()}
          </StatItem>
        </StatsContainer>
      )}

      {filteredLabels.length === 0 ? (
        <EmptyState>
          {labels.length === 0
            ? APP_CONFIG.MESSAGES.EMPTY_COLLECTION
            : APP_CONFIG.MESSAGES.NO_SEARCH_RESULTS}
        </EmptyState>
      ) : (
        filteredLabels.map((label: Label) => (
          <LabelItem key={label.id} label={label} />
        ))
      )}
    </ListContainer>
  );
};

export default LabelList;

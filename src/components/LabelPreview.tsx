import React from "react";
import styled from "styled-components";
import { LabelFormData } from "@/types/label";
import { COLORS, SPACING } from "@/shared/constants/theme";

interface LabelPreviewProps {
  data: LabelFormData;
}

const PreviewContainer = styled.div`
  padding: ${SPACING.lg};
  border: 2px dashed ${COLORS.primary};
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 249, 255, 0.9) 100%
  );
  margin-bottom: ${SPACING.lg};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`;

const PreviewTitle = styled.h3`
  margin: 0 0 ${SPACING.md} 0;
  color: ${COLORS.neutral.dark};
  font-size: 18px;
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const LabelBlock = styled.div<{
  $textColor: string;
  $backgroundColor: string;
  $fontSize: number;
  $isBold: boolean;
  $isItalic: boolean;
}>`
  display: inline-block;
  padding: 12px 16px;
  border-radius: 6px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$fontSize}px;
  font-weight: ${(props) => (props.$isBold ? "bold" : "normal")};
  font-style: ${(props) => (props.$isItalic ? "italic" : "normal")};
  border: 1px solid rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  max-width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyState = styled.div`
  color: #999;
  font-style: italic;
  padding: 20px;
  text-align: center;
`;

const LabelPreview: React.FC<LabelPreviewProps> = ({ data }) => {
  const { text, textColor, backgroundColor, fontSize, isBold, isItalic } = data;

  return (
    <PreviewContainer>
      <PreviewTitle>👀 Предварительный просмотр</PreviewTitle>
      {text.trim() ? (
        <LabelBlock
          $textColor={textColor}
          $backgroundColor={backgroundColor}
          $fontSize={fontSize}
          $isBold={isBold}
          $isItalic={isItalic}
        >
          {text}
        </LabelBlock>
      ) : (
        <EmptyState>Введите текст для предварительного просмотра</EmptyState>
      )}
    </PreviewContainer>
  );
};

export default LabelPreview;

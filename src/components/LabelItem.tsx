import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '@/hooks/redux';
import { deleteLabel, setEditingLabel } from '@/store/labelsSlice';
import { Label } from '@/types/label';

interface LabelItemProps {
  label: Label;
}

const ItemContainer = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
  }
`;

const LabelPreview = styled.div<{
  $textColor: string;
  $backgroundColor: string;
  $fontSize: number;
  $isBold: boolean;
  $isItalic: boolean;
}>`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.$textColor};
  font-size: ${props => props.$fontSize}px;
  font-weight: ${props => props.$isBold ? 'bold' : 'normal'};
  font-style: ${props => props.$isItalic ? 'italic' : 'normal'};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  word-wrap: break-word;
  max-width: 100%;
`;

const LabelInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #666;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button<{ $variant?: 'edit' | 'delete' }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => props.$variant === 'edit' ? `
    background-color: #28a745;
    color: white;
    
    &:hover {
      background-color: #218838;
    }
  ` : `
    background-color: #dc3545;
    color: white;
    
    &:hover {
      background-color: #c82333;
    }
  `}
`;

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const LabelItem: React.FC<LabelItemProps> = ({ label }) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(setEditingLabel(label));
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту маркировку?')) {
      dispatch(deleteLabel(label.id));
    }
  };

  return (
    <ItemContainer>
      <LabelPreview
        $textColor={label.textColor}
        $backgroundColor={label.backgroundColor}
        $fontSize={label.fontSize}
        $isBold={label.isBold}
        $isItalic={label.isItalic}
      >
        {label.text}
      </LabelPreview>

      <LabelInfo>
        <InfoItem>
          <span>Размер шрифта:</span>
          <span>{label.fontSize}px</span>
        </InfoItem>
        <InfoItem>
          <span>Стили:</span>
          <span>
            {label.isBold && 'Жирный'} {label.isBold && label.isItalic && ', '}
            {label.isItalic && 'Курсив'}
            {!label.isBold && !label.isItalic && 'Обычный'}
          </span>
        </InfoItem>
        <InfoItem>
          <span>Создано:</span>
          <span>{formatDate(label.createdAt)}</span>
        </InfoItem>
        <InfoItem>
          <span>Изменено:</span>
          <span>{formatDate(label.updatedAt)}</span>
        </InfoItem>
      </LabelInfo>

      <ButtonContainer>
        <Button $variant="edit" onClick={handleEdit}>
          Редактировать
        </Button>
        <Button $variant="delete" onClick={handleDelete}>
          Удалить
        </Button>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default LabelItem;

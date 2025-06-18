import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addLabel, updateLabel, clearEditingLabel } from "@/store/labelsSlice";
import { LabelFormData } from "@/types/label";
import { COLORS, SPACING, BREAKPOINTS } from "@/shared/constants/theme";
import { APP_CONFIG } from "@/shared/constants/app";
import LabelPreview from "./LabelPreview";

const FormContainer = styled.div`
  background: ${COLORS.gradients.card};
  padding: ${SPACING.xl};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: ${SPACING.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const FormTitle = styled.h2`
  margin: 0 0 ${SPACING.lg} 0;
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${SPACING.md};
  margin-bottom: ${SPACING.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 6px;
  font-weight: 500;
  color: #555;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: ${SPACING.md} ${SPACING.lg};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.$variant === "primary"
      ? `
    background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  `
      : `
    background: ${COLORS.neutral.white};
    color: ${COLORS.neutral.gray};
    border: 2px solid ${COLORS.neutral.light};

    &:hover {
      background: ${COLORS.neutral.light};
      border-color: ${COLORS.primary};
      color: ${COLORS.primary};
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const LabelForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { editingLabel } = useAppSelector((state) => state.labels);

  const [formData, setFormData] = useState<LabelFormData>({
    text: "",
    textColor: COLORS.defaultLabel.text,
    backgroundColor: COLORS.defaultLabel.background,
    fontSize: 18,
    isBold: false,
    isItalic: false,
  });

  useEffect(() => {
    if (editingLabel) {
      setFormData({
        text: editingLabel.text,
        textColor: editingLabel.textColor,
        backgroundColor: editingLabel.backgroundColor,
        fontSize: editingLabel.fontSize,
        isBold: editingLabel.isBold,
        isItalic: editingLabel.isItalic,
      });
    }
  }, [editingLabel]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.text.trim()) {
      alert(APP_CONFIG.MESSAGES.TEXT_REQUIRED);
      return;
    }

    if (editingLabel) {
      dispatch(updateLabel({ id: editingLabel.id, data: formData }));
    } else {
      dispatch(addLabel(formData));
    }

    handleReset();
  };

  const handleReset = () => {
    setFormData({
      text: "",
      textColor: COLORS.defaultLabel.text,
      backgroundColor: COLORS.defaultLabel.background,
      fontSize: 18,
      isBold: false,
      isItalic: false,
    });
    dispatch(clearEditingLabel());
  };

  return (
    <FormContainer>
      <FormTitle>
        {editingLabel
          ? "✏️ Редактирование этикетки"
          : "🎨 Дизайн новой этикетки"}
      </FormTitle>

      <LabelPreview data={formData} />

      <form onSubmit={handleSubmit}>
        <FormGroup style={{ marginBottom: "16px" }}>
          <Label htmlFor="text">Текст маркировки</Label>
          <TextArea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Введите текст маркировки..."
            required
          />
        </FormGroup>

        <FormGrid>
          <FormGroup>
            <Label htmlFor="textColor">Цвет текста</Label>
            <Input
              type="color"
              id="textColor"
              name="textColor"
              value={formData.textColor}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="backgroundColor">Цвет фона</Label>
            <Input
              type="color"
              id="backgroundColor"
              name="backgroundColor"
              value={formData.backgroundColor}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="fontSize">Размер шрифта (px)</Label>
            <Input
              type="number"
              id="fontSize"
              name="fontSize"
              value={formData.fontSize}
              onChange={handleInputChange}
              min="8"
              max="72"
            />
          </FormGroup>

          <FormGroup>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="isBold"
                name="isBold"
                checked={formData.isBold}
                onChange={handleInputChange}
              />
              <Label htmlFor="isBold">Жирный</Label>
            </CheckboxContainer>

            <CheckboxContainer style={{ marginTop: "8px" }}>
              <Checkbox
                type="checkbox"
                id="isItalic"
                name="isItalic"
                checked={formData.isItalic}
                onChange={handleInputChange}
              />
              <Label htmlFor="isItalic">Курсив</Label>
            </CheckboxContainer>
          </FormGroup>
        </FormGrid>

        <ButtonContainer>
          <Button type="submit" $variant="primary">
            {editingLabel ? "💾 Сохранить изменения" : "✨ Создать этикетку"}
          </Button>
          {editingLabel && (
            <Button type="button" $variant="secondary" onClick={handleReset}>
              ❌ Отменить
            </Button>
          )}
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default LabelForm;

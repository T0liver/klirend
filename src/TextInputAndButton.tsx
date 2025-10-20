import './TextInputAndButton.css'
import { TextInput, TextInputProps } from "./TextInput";
import IconButton from './IconButton';

export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    buttonIcon?: string;
    onClick?: () => void;
}

export function TextInputAndButton({ buttonContent, buttonIcon, onClick, ...textInputProps }:
    TextInputAndButtonProps) {
    return <div class="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick} />
        <IconButton
            icon={buttonIcon}
            label={buttonContent}
            onClick={onClick}
        />
    </div>
}
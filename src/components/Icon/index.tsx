import { Icon as IconStyled } from './styles';

interface IconProps {
  src: string;
  alt: string;
}

export function Icon({ src, alt }: IconProps) {
  return <IconStyled src={src} alt={alt} />;
}

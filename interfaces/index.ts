export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  price: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
}


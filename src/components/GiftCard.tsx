import React from 'react';
import { Card, Title, Description, Image, ProductLink, DeleteButton } from '../styles/GiftCard.Styles';

interface GiftCardProps {
  title: string;
  description?: string;
  image_url?: string;
  product_link?: string;
  onDelete?: () => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ title, description, image_url, product_link, onDelete }) => {
  return (
    <Card>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {image_url && <Image src={image_url} alt={title} />}
      {product_link && (
        <p>
          <ProductLink href={product_link} target="_blank" rel="noreferrer">
            Ver presente no site
          </ProductLink>
        </p>
      )}
      {onDelete && <DeleteButton onClick={onDelete}>Apagar</DeleteButton>}
    </Card>
  );
};

export default GiftCard;

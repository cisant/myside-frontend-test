import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: 20px;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: red;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 24px;
  color: red;
  margin-bottom: 20px;
`;

export const DiscountLabel = styled.span`
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
`;

export const BrandModel = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Description = styled.div`
  margin-top: 40px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 5px;

  h2 {
    color: red;
  }

  p {
    font-size: 16px;
    color: #333;
    white-space: pre-line;
  }
`;

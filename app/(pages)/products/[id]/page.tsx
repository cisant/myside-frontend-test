"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/app/components/atoms/Buttons/Button";
import {
  ProductContainer,
  ProductHeader,
  ImageWrapper,
  ProductInfo,
  Title,
  Price,
  DiscountLabel,
  BrandModel,
  Description,
} from "./styles";
import { useProduct } from "@/app/hooks/useProduct";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { product, getProductDetails, backToProductList } = useProduct();

  useEffect(() => {
    getProductDetails(parseInt(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <ProductContainer>
      <ProductHeader>
        <ImageWrapper>
          <Image
            src={product?.image || ""}
            alt={product?.title || ""}
            width={500}
            height={500}
          />
        </ImageWrapper>
        <ProductInfo>
          <Title>{product?.title}</Title>
          <Price>
            ${product?.price}{" "}
            {product?.discount && product.discount > 0 && (
              <DiscountLabel>({product?.discount}% off)</DiscountLabel>
            )}
          </Price>
          <BrandModel>
            <strong>Brand:</strong> {product?.brand}
          </BrandModel>
          <BrandModel>
            <strong>Model:</strong> {product?.model}
          </BrandModel>
          <BrandModel>
            <strong>Color:</strong> {product?.color}
          </BrandModel>
          <BrandModel>
            <strong>Category:</strong> {product?.category}
          </BrandModel>
          <Button onClick={() => backToProductList()}>Back to list</Button>
        </ProductInfo>
      </ProductHeader>

      <Description>
        <h2>Description</h2>
        <p>{product?.description}</p>
      </Description>
    </ProductContainer>
  );
}

import React from 'react';
import styled from "styled-components";

const Header = styled.header`
  background-color: #0d6efd;
  color: white;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  margin-left: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ffc107;
  }
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  color: white;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #ffc107;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffdf00;
  }
`;

const ProductList = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const Product = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  max-width: 50%;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const ProductInfo = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const ProductTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Extra = () => {
  return (
    <>
      <Header>
        <Nav>
          <Logo>My Shopping Site</Logo>
          <NavLinks>
            <NavLink>Home</NavLink>
            <NavLink>Shop</NavLink>
           
            <NavLink>Contact</NavLink>
      </NavLinks>
    </Nav>
  </Header>
  <Hero>
    <HeroTitle>Welcome to My Shopping Site</HeroTitle>
    <HeroSubtitle>Your one-stop shop for all your needs</HeroSubtitle>
    <Button>Shop Now</Button>
  </Hero>
  <ProductList>
    <Product>
      <ProductImage
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db043144358655.58109bad98b7a.jpg"
        alt="Product"
      />
      <ProductInfo>
        <ProductTitle>Product 1</ProductTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ProductDescription>
        <ProductPrice>2000 Inr.</ProductPrice>
      </ProductInfo>
    </Product>
    <Product>
      <ProductImage
        src="https://th.bing.com/th/id/OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2?pid=ImgDet&rs=1"
        alt="Product"
      />
      <ProductInfo>
        <ProductTitle>Product 2</ProductTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ProductDescription>
        <ProductPrice>2499 Inr.</ProductPrice>
      </ProductInfo>
    </Product>
  </ProductList>
</>
  );
};

export default Extra
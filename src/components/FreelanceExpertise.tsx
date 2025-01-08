import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface FreelanceData {
  frameworks: string[];
  cmsTools: string[];
  keyContributions: string[];
  description: string;
}

interface FreelanceExpertiseProps {
  freelanceData: FreelanceData;
}

const Section = styled(motion.section)`
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(6, 7, 225, 0.03), rgba(255, 255, 255, 0.5));
  border-radius: 16px;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(6, 7, 225, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 1rem 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(6, 7, 225, 0.15);
  }
`;

const Title = styled(motion.h2)`
  color: #000000;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #0607E1;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  color: #000000;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 800px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(6, 7, 225, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(6, 7, 225, 0.1);
  }
`;

const Category = styled.h3`
  color: #0607E1;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '⚡';
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(motion.li)`
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: #0607E1;
    border-radius: 50%;
  }

  @media (hover: hover) {
    &:hover {
      color: #0607E1;
      transform: translateX(4px);
      transition: all 0.3s ease;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

const FreelanceExpertise: React.FC<FreelanceExpertiseProps> = ({ freelanceData }) => {
  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Freelance Expertise
      </Title>
      
      <Description
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {freelanceData.description}
      </Description>

      <Grid>
        <CategoryCard variants={itemVariants}>
          <Category>Frameworks</Category>
          <List>
            {freelanceData.frameworks.map((framework) => (
              <ListItem
                key={framework}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                role="listitem"
                aria-label={framework}
              >
                {framework}
              </ListItem>
            ))}
          </List>
        </CategoryCard>

        <CategoryCard variants={itemVariants}>
          <Category>CMS Tools</Category>
          <List>
            {freelanceData.cmsTools.map((tool) => (
              <ListItem
                key={tool}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                role="listitem"
                aria-label={tool}
              >
                {tool}
              </ListItem>
            ))}
          </List>
        </CategoryCard>

        <CategoryCard variants={itemVariants}>
          <Category>Key Contributions</Category>
          <List>
            {freelanceData.keyContributions.map((contribution) => (
              <ListItem
                key={contribution}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                role="listitem"
                aria-label={contribution}
              >
                {contribution}
              </ListItem>
            ))}
          </List>
        </CategoryCard>
      </Grid>
    </Section>
  );
};

export default FreelanceExpertise;

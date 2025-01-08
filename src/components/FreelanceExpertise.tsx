import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FreelanceItem } from '../data/freelanceData';

interface FreelanceData {
  frameworks: FreelanceItem[];
  cmsTools: FreelanceItem[];
  keyContributions: FreelanceItem[];
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
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(motion.li)`
  margin: 1rem 0;
  padding: 0.5rem 0.8rem;
  position: relative;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  i {
    color: #0607E1;
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
  }

  @media (hover: hover) {
    &:hover {
      background: rgba(6, 7, 225, 0.05);
      transform: translateX(4px);
      
      i {
        transform: scale(1.1);
      }
    }
  }
`;

const CategoryIcon = {
  frameworks: "fa-solid fa-code",
  cmsTools: "fa-solid fa-cubes",
  keyContributions: "fa-solid fa-star"
};

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
        <i className="fa-solid fa-laptop-code" style={{ marginRight: '0.5rem' }}></i>
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
          <Category>
            <i className={CategoryIcon.frameworks}></i>
            Frameworks
          </Category>
          <List>
            {freelanceData.frameworks.map((framework) => (
              <ListItem
                key={framework.name}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                role="listitem"
                aria-label={framework.name}
              >
                <i className={framework.icon}></i>
                {framework.name}
              </ListItem>
            ))}
          </List>
        </CategoryCard>

        <CategoryCard variants={itemVariants}>
          <Category>
            <i className={CategoryIcon.cmsTools}></i>
            CMS Tools
          </Category>
          <List>
            {freelanceData.cmsTools.map((tool) => (
              <ListItem
                key={tool.name}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                role="listitem"
                aria-label={tool.name}
              >
                <i className={tool.icon}></i>
                {tool.name}
              </ListItem>
            ))}
          </List>
        </CategoryCard>

        <CategoryCard variants={itemVariants}>
          <Category>
            <i className={CategoryIcon.keyContributions}></i>
            Key Contributions
          </Category>
          <List>
            {freelanceData.keyContributions.map((contribution) => (
              <ListItem
                key={contribution.name}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                role="listitem"
                aria-label={contribution.name}
              >
                <i className={contribution.icon}></i>
                {contribution.name}
              </ListItem>
            ))}
          </List>
        </CategoryCard>
      </Grid>
    </Section>
  );
};

export default FreelanceExpertise;

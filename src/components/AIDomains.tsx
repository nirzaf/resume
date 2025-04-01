import React from 'react';
import { motion } from 'framer-motion';
import { AIDomainData } from '../types/resume';
import styled from 'styled-components';

interface AIDomainsProps {
  domains: AIDomainData[];
}

const DomainCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const AIDomains: React.FC<AIDomainsProps> = ({ domains }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Expertise Domains
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized knowledge areas across the artificial intelligence landscape
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {domains.map((domain) => (
            <DomainCard
              key={domain.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <IconWrapper 
                  className={`bg-gradient-to-r ${domain.color} text-white`}
                  whileHover="hover"
                  variants={iconVariants}
                >
                  <i className={`${domain.icon} text-xl`}></i>
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: ['0 0 0 0px rgba(59, 130, 246, 0.3)', '0 0 0 10px rgba(59, 130, 246, 0)'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </IconWrapper>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{domain.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{domain.description}</p>
                
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
            </DomainCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIDomains;

import React from 'react';
import { motion } from 'framer-motion';
import 'devicon/devicon.min.css';

// Define technology colors for fallback icons
const techColors: Record<number, string> = {
  0: '#3B82F6', // blue-500
  1: '#10B981', // green-500
  2: '#8B5CF6', // purple-500
  3: '#EF4444', // red-500
  4: '#F59E0B', // yellow-500
  5: '#EC4899', // pink-500
  6: '#6366F1', // indigo-500
  7: '#14B8A6', // teal-500
};

interface Technology {
  name: string;
  icon: string; // Fallback icon URL if devicon not found or explicitly needed
}

// Map of technology names to their devicon class names
// --- UPDATED with specific checks for image items ---
const techIconMap: Record<string, string> = {
  // Programming Languages
  'javascript': 'devicon-javascript-plain colored',
  'typescript': 'devicon-typescript-plain colored',
  'python': 'devicon-python-plain colored',
  'java': 'devicon-java-plain colored',
  'c#': 'devicon-csharp-plain colored',
  'csharp': 'devicon-csharp-plain colored',
  'c++': 'devicon-cplusplus-plain colored',
  'c': 'devicon-c-plain colored',
  'php': 'devicon-php-plain colored',
  'ruby': 'devicon-ruby-plain colored',
  'go': 'devicon-go-original-wordmark colored',
  'golang': 'devicon-go-original-wordmark colored',
  'rust': 'devicon-rust-plain colored',
  'kotlin': 'devicon-kotlin-plain colored',
  'swift': 'devicon-swift-plain colored',
  'scala': 'devicon-scala-plain colored',
  'dart': 'devicon-dart-plain colored',
  'lua': 'devicon-lua-plain colored',
  'perl': 'devicon-perl-plain colored',
  'haskell': 'devicon-haskell-plain colored',
  'elixir': 'devicon-elixir-plain colored',
  'clojure': 'devicon-clojure-line colored',
  'objectivec': 'devicon-objectivec-plain colored',
  'objective-c': 'devicon-objectivec-plain colored',
  'bash': 'devicon-bash-plain colored',
  'shell': 'devicon-bash-plain colored', // Map shell to bash
  'powershell': 'devicon-powershell-plain colored',

  // Frontend Frameworks & Libraries
  'react': 'devicon-react-original colored',
  'react native': 'devicon-react-original colored',
  'angular': 'devicon-angularjs-plain colored', // Devicon uses angularjs for Angular
  'angularjs': 'devicon-angularjs-plain colored',
  'vue': 'devicon-vuejs-plain colored',
  'vuejs': 'devicon-vuejs-plain colored',
  'svelte': 'devicon-svelte-plain colored',
  'jquery': 'devicon-jquery-plain colored',
  'ember': 'devicon-ember-original-wordmark colored',
  'backbonejs': 'devicon-backbonejs-plain colored',
  'redux': 'devicon-redux-original colored',
  'rxjs': 'devicon-rxjs-plain colored', // Added RxJS
  'nextjs': 'devicon-nextjs-original colored', // Use original for better visibility
  'next.js': 'devicon-nextjs-original colored',
  'nuxtjs': 'devicon-nuxtjs-plain colored',
  'nuxt.js': 'devicon-nuxtjs-plain colored',
  'gatsby': 'devicon-gatsby-plain colored',
  'electron': 'devicon-electron-original colored',

  // Web Standards & Styling
  'html': 'devicon-html5-plain colored',
  'html5': 'devicon-html5-plain colored',
  'css': 'devicon-css3-plain colored',
  'css3': 'devicon-css3-plain colored',
  'sass': 'devicon-sass-original colored',
  'scss': 'devicon-sass-original colored',
  'less': 'devicon-less-plain-wordmark colored',
  'stylus': 'devicon-stylus-original colored', // Original has the logo
  'tailwind': 'devicon-tailwindcss-plain colored',
  'tailwindcss': 'devicon-tailwindcss-plain colored',
  'bootstrap': 'devicon-bootstrap-plain colored',
  'materialui': 'devicon-materialui-plain colored',
  'material ui': 'devicon-materialui-plain colored',
  'bulma': 'devicon-bulma-plain colored',
  'foundation': 'devicon-foundation-plain colored',

  // Backend Frameworks & Runtimes
  'node.js': 'devicon-nodejs-plain colored',
  'nodejs': 'devicon-nodejs-plain colored',
  'express': 'devicon-express-original colored',
  'django': 'devicon-django-plain colored',
  'flask': 'devicon-flask-original colored',
  'spring': 'devicon-spring-plain colored',
  'springboot': 'devicon-spring-plain colored',
  'laravel': 'devicon-laravel-plain colored',
  'rails': 'devicon-rails-plain colored',
  'rubyonrails': 'devicon-rails-plain colored',
  'dotnet': 'devicon-dot-net-plain colored',
  '.net': 'devicon-dot-net-plain colored',
  '.net core': 'devicon-dot-net-plain colored',
  'aspnet': 'devicon-dot-net-plain colored', // Map ASP.NET variations
  'asp.net': 'devicon-dot-net-plain colored',
  'asp.net core': 'devicon-dot-net-plain colored',
  'nestjs': 'devicon-nestjs-plain colored',
  'phoenix': 'devicon-phoenix-plain colored', // Elixir framework

  // Databases
  'mongodb': 'devicon-mongodb-plain colored',
  'mysql': 'devicon-mysql-plain colored',
  'postgresql': 'devicon-postgresql-plain colored',
  'sqlite': 'devicon-sqlite-plain colored',
  'redis': 'devicon-redis-plain colored',
  'oracle': 'devicon-oracle-original colored',
  'sql server': 'devicon-microsoftsqlserver-plain colored',
  'mssql': 'devicon-microsoftsqlserver-plain colored',
  'microsoft sql server': 'devicon-microsoftsqlserver-plain colored',
  'cosmos db': 'devicon-azure-plain colored', // Keep generic Azure fallback
  'azuresql': 'devicon-microsoftsqlserver-plain colored', // Explicit Azure SQL mapping
  'cassandra': 'devicon-cassandra-plain colored',
  'couchdb': 'devicon-couchdb-plain colored',
  'mariadb': 'devicon-mariadb-plain colored',
  'dynamodb': 'devicon-dynamodb-plain colored', // AWS DynamoDB
  'neo4j': 'devicon-neo4j-plain colored',

  // DevOps, Cloud & Tools
  'git': 'devicon-git-plain colored',
  'github': 'devicon-github-original colored',
  'gitlab': 'devicon-gitlab-plain colored',
  'bitbucket': 'devicon-bitbucket-original colored',
  'docker': 'devicon-docker-plain colored',
  'kubernetes': 'devicon-kubernetes-plain colored',
  'aws': 'devicon-amazonwebservices-original colored', // Use original for logo
  'amazon web services': 'devicon-amazonwebservices-original colored',
  'azure': 'devicon-azure-plain colored', // Base Azure
  'microsoft azure': 'devicon-azure-plain colored',
  'azure devops': 'devicon-azuredevops-plain colored', // Specific Azure DevOps
  'azure ci/cd': 'devicon-azuredevops-plain colored', // Map CI/CD explicitly
  'gcp': 'devicon-googlecloud-plain colored',
  'google cloud': 'devicon-googlecloud-plain colored',
  'heroku': 'devicon-heroku-original colored', // Use original for logo
  'digitalocean': 'devicon-digitalocean-plain colored',
  'netlify': 'devicon-netlify-plain colored',
  'vercel': 'devicon-vercel-original colored',
  'jenkins': 'devicon-jenkins-line colored', // Line often looks better
  'travis': 'devicon-travis-plain colored',
  'circleci': 'devicon-circleci-plain colored',
  'nginx': 'devicon-nginx-original colored',
  'apache': 'devicon-apache-plain colored',
  'terraform': 'devicon-terraform-plain colored',
  'rabbitmq': 'devicon-rabbitmq-plain colored', // Added RabbitMQ
  'ansible': 'devicon-ansible-plain colored',
  'chef': 'devicon-chef-plain colored',
  'puppet': 'devicon-puppet-plain colored',
  'vagrant': 'devicon-vagrant-plain colored',
  'prometheus': 'devicon-prometheus-original colored',
  'grafana': 'devicon-grafana-original colored',

  // Build Tools & Package Managers
  'webpack': 'devicon-webpack-plain colored',
  'babel': 'devicon-babel-plain colored',
  'gulp': 'devicon-gulp-plain colored',
  'grunt': 'devicon-grunt-plain colored',
  'npm': 'devicon-npm-original-wordmark colored',
  'yarn': 'devicon-yarn-plain colored',
  'maven': 'devicon-maven-plain colored',
  'gradle': 'devicon-gradle-plain colored',

  // Testing
  'jest': 'devicon-jest-plain colored',
  'mocha': 'devicon-mocha-plain colored',
  'jasmine': 'devicon-jasmine-plain colored',
  'selenium': 'devicon-selenium-original colored',
  'cypress': 'devicon-cypressio-plain colored', // Devicon uses 'cypressio'
  'puppeteer': 'devicon-puppeteer-plain colored',
  'storybook': 'devicon-storybook-plain colored',
  'junit': 'devicon-java-plain colored', // No specific icon, associate with Java
  'xunit': 'devicon-dot-net-plain colored', // Associate with .NET

  // Editors & IDEs
  'vscode': 'devicon-vscode-plain colored',
  'visual studio code': 'devicon-vscode-plain colored',
  'visual studio': 'devicon-visualstudio-plain colored',
  'intellij': 'devicon-intellij-plain colored',
  'webstorm': 'devicon-webstorm-plain colored',
  'pycharm': 'devicon-pycharm-plain colored',
  'android studio': 'devicon-androidstudio-plain colored',
  'vim': 'devicon-vim-plain colored',
  'neovim': 'devicon-neovim-plain colored',
  'emacs': 'devicon-emacs-original colored',
  'xcode': 'devicon-xcode-plain colored',

  // Mobile Development
  'android': 'devicon-android-plain colored',
  'ios': 'devicon-apple-original colored', // Use Apple logo for iOS
  'flutter': 'devicon-flutter-plain colored',
  // 'react native' is under Frontend
  'xamarin': 'devicon-xamarin-original colored',

  // API & Communication
  'graphql': 'devicon-graphql-plain colored',
  'rest': 'devicon-networkx-original colored', // No specific REST icon, use a generic network/API concept or fallback
  'rest api': 'devicon-networkx-original colored',
  'grpc': 'devicon-grpc-plain colored',
  'openapi': 'devicon-swagger-plain colored', // OpenAPI often associated with Swagger
  'swagger': 'devicon-swagger-plain colored',
  'postman': 'devicon-postman-plain colored',
  'oauth': 'devicon-oauth-plain colored', // Generic representation
  'oauth2': 'devicon-oauth-plain colored',
  'openid': 'devicon-oauth-plain colored',
  'jwt': 'devicon-oauth-plain colored', // Map JWT to OAuth icon as a representation
  'json': 'devicon-json-plain colored',
  'xml': 'devicon-xml-plain colored',
  'yaml': 'devicon-yaml-plain colored',
  'markdown': 'devicon-markdown-original',
  'signalr': 'devicon-dot-net-plain colored', // Part of .NET ecosystem

  // Data Science & Machine Learning
  'tensorflow': 'devicon-tensorflow-original colored',
  'pytorch': 'devicon-pytorch-original colored',
  'keras': 'devicon-keras-original colored',
  'scikitlearn': 'devicon-scikitlearn-plain colored',
  'pandas': 'devicon-pandas-original colored',
  'numpy': 'devicon-numpy-original colored',
  'jupyter': 'devicon-jupyter-plain colored',
  'r': 'devicon-r-original colored',
  'rstudio': 'devicon-rstudio-plain colored',

  // Design & UI/UX
  'figma': 'devicon-figma-plain colored',
  'sketch': 'devicon-sketch-original colored',
  'xd': 'devicon-xd-plain colored',
  'adobexd': 'devicon-xd-plain colored',
  'illustrator': 'devicon-illustrator-plain colored',
  'photoshop': 'devicon-photoshop-plain colored',
  'aftereffects': 'devicon-aftereffects-plain colored',
  'premierepro': 'devicon-premierepro-plain colored',
  'invision': 'devicon-invision-plain colored',
  'zeplin': 'devicon-zeplin-plain colored',

  // CMS & Platforms
  'wordpress': 'devicon-wordpress-plain colored',
  'drupal': 'devicon-drupal-plain colored',
  'joomla': 'devicon-joomla-plain colored',
  'shopify': 'devicon-shopify-original colored',
  'magento': 'devicon-magento-original colored',
  'firebase': 'devicon-firebase-plain colored',
  'appwrite': 'devicon-appwrite-plain colored',
  'supabase': 'devicon-supabase-plain colored',

  // Other/Misc
  'linux': 'devicon-linux-plain colored',
  'ubuntu': 'devicon-ubuntu-plain colored',
  'debian': 'devicon-debian-plain colored',
  'centos': 'devicon-centos-plain colored',
  'fedora': 'devicon-fedora-plain colored',
  'windows': 'devicon-windows8-original colored', // Generic Windows
  'apple': 'devicon-apple-original colored',
  'raspberrypi': 'devicon-raspberrypi-line colored',
  'arduino': 'devicon-arduino-plain colored',
  'blender': 'devicon-blender-original colored',
  'unity': 'devicon-unity-original colored',
  'unrealengine': 'devicon-unrealengine-original colored',
  'jira': 'devicon-jira-plain colored',
  'confluence': 'devicon-confluence-original colored',
  'trello': 'devicon-trello-plain colored',
  'slack': 'devicon-slack-plain colored',
  'sourcetree': 'devicon-sourcetree-original colored',
  'webassembly': 'devicon-webassembly-plain colored',
  'wasm': 'devicon-webassembly-plain colored',
  'microservices': 'devicon-networkx-original colored', // Architectural concept

  // Specific Azure Services (Mapping to generic or related icons if specific not available)
  'azure service bus': 'devicon-azure-plain colored', // Generic Azure icon
  'azure active directory': 'devicon-azure-plain colored', // Generic Azure icon
  'azure ad': 'devicon-azure-plain colored',
  'azure redis cache': 'devicon-redis-plain colored', // Use Redis icon
  'azure api management': 'devicon-azure-plain colored', // Generic Azure icon
  'azure monitor': 'devicon-azure-plain colored', // Generic Azure icon
  'azure key vault': 'devicon-azure-plain colored', // Generic Azure icon
  'application insights': 'devicon-azure-plain colored', // Generic Azure icon
  'azure functions': 'devicon-azure-plain colored', // Generic Azure icon
  'azure app service': 'devicon-azure-plain colored', // Generic Azure icon
  'azure storage': 'devicon-azure-plain colored', // Generic Azure icon
  'azure cosmos db': 'devicon-azure-plain colored', // Generic Azure icon
  'azure sql': 'devicon-microsoftsqlserver-plain colored', // Use SQL Server icon
  // 'azure devops' is already defined above

   // Healthcare Specific (Using generic/related if specific unavailable)
  'fhir': 'devicon-networkx-original colored', // Representing a standard/protocol - using generic network

  // Architectural Patterns (Using related tech if no specific icon)
  'cqrs': 'devicon-dot-net-plain colored', // Often used in .NET, no specific icon
};

// Function to find the best matching icon for a technology
const findBestIconMatch = (techName: string): string => {
  const normalizedName = techName.toLowerCase().trim();

  // Direct match (most common case)
  if (techIconMap[normalizedName]) {
    return techIconMap[normalizedName];
  }

  // --- Enhanced Special Cases ---
  // Check if the name *contains* a key from the map (e.g., "React Native" finding "react")
  // Sort keys by length descending to match longer keys first (e.g., "sql server" before "sql")
  const sortedKeys = Object.keys(techIconMap).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (normalizedName.includes(key)) {
      console.log(`Partial match found for "${normalizedName}" using key "${key}"`); // Debugging log
      return techIconMap[key];
    }
  }

  // --- Original Special Cases (can potentially be removed if covered above, but kept for robustness) ---
  if (normalizedName.includes('sql server') || normalizedName.includes('mssql')) {
    return 'devicon-microsoftsqlserver-plain colored';
  }
  if (normalizedName.includes('.net') || normalizedName.includes('asp.net') || normalizedName.includes('dotnet')) {
    return 'devicon-dot-net-plain colored';
  }
  if (normalizedName.includes('c#') || normalizedName.includes('csharp')) {
    return 'devicon-csharp-plain colored';
  }
  if (normalizedName.includes('azure')) { // Broad Azure catch-all
      // Check for specific Azure DevOps first
     if (normalizedName.includes('devops')) return 'devicon-azuredevops-plain colored';
     // Check for Azure SQL
     if (normalizedName.includes('sql')) return 'devicon-microsoftsqlserver-plain colored';
     // Check for Azure Redis
     if (normalizedName.includes('redis')) return 'devicon-redis-plain colored';
     // Default Azure
    return 'devicon-azure-plain colored';
  }
   if (normalizedName.includes('amazon web services') || normalizedName.includes('aws')) {
     // Check for specific AWS services if needed here, e.g. DynamoDB
     if (normalizedName.includes('dynamodb')) return 'devicon-dynamodb-plain colored';
     // Default AWS
    return 'devicon-amazonwebservices-original colored';
  }
   if (normalizedName.includes('google cloud') || normalizedName.includes('gcp')) {
    return 'devicon-googlecloud-plain colored';
  }
  if (normalizedName.includes('redis')) {
    return 'devicon-redis-plain colored';
  }
   if (normalizedName.includes('react')) { // Catch things like 'React Query'
    return 'devicon-react-original colored';
  }
  if (normalizedName.includes('node')) {
    return 'devicon-nodejs-plain colored';
  }
  if (normalizedName.includes('signal') || normalizedName.includes('signalr')) {
    return 'devicon-dot-net-plain colored';
  }
   if (normalizedName.includes('visual studio')) { // Catches 'Visual Studio 2022' etc.
     if (normalizedName.includes('code')) return 'devicon-vscode-plain colored'; // Prioritize VS Code
    return 'devicon-visualstudio-plain colored';
  }
   if (normalizedName.includes('bootstrap')) {
    return 'devicon-bootstrap-plain colored';
  }
  if (normalizedName.includes('jquery')) {
    return 'devicon-jquery-plain colored';
  }
   if (normalizedName.includes('entity framework') || normalizedName.includes('ef core')) {
    return 'devicon-dot-net-plain colored'; // Associate with .NET
  }
  if (normalizedName.includes('xaml')) {
    return 'devicon-dot-net-plain colored'; // Often used in .NET (WPF, Xamarin)
  }
  if (normalizedName.includes('wpf')) {
    return 'devicon-dot-net-plain colored'; // .NET technology
  }
   if (normalizedName.includes('windows')) {
    return 'devicon-windows8-original colored';
  }
   if (normalizedName.includes('rest') || normalizedName.includes('api')) {
     // Could refine this - maybe check for 'graphql' first?
     if (normalizedName.includes('graphql')) return 'devicon-graphql-plain colored';
     if (normalizedName.includes('grpc')) return 'devicon-grpc-plain colored';
    return 'devicon-networkx-original colored'; // Generic network/API icon
  }
   if (normalizedName.includes('xml')) {
    return 'devicon-xml-plain colored';
  }
  if (normalizedName.includes('json')) {
    return 'devicon-json-plain colored';
  }
  if (normalizedName.includes('fhir')) {
     return 'devicon-networkx-original colored'; // FHIR fallback
  }
   if (normalizedName.includes('cqrs')) {
     return 'devicon-dot-net-plain colored'; // CQRS fallback
  }

  // No match found after all checks
  return '';
};

const TechCard: React.FC<{ tech: Technology; index: number }> = ({ tech, index }) => {
  // Get the best matching icon class for this technology
  const iconClass = findBestIconMatch(tech.name);

  // Determine if we should use devicon or fallback
  const useDevicon = !!iconClass;

  return (
    <motion.div
      className="relative aspect-square w-12 sm:w-14 md:w-16 group shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      title={tech.name} // Add title attribute for accessibility and hover info
    >
      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-xl" />

      <div className="relative h-full w-full flex flex-col items-center justify-center p-1.5">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1 flex items-center justify-center">
          {useDevicon ? (
            <i className={`${iconClass} text-2xl sm:text-3xl transition-transform duration-500 group-hover:scale-110`}></i>
          ) : (
            tech.icon ? (
              <img
                src={tech.icon}
                alt={`${tech.name} logo`} // More descriptive alt text
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              // Fallback square with initials
              <div
                className={`w-full h-full rounded-md flex items-center justify-center text-[10px] sm:text-[12px] text-white font-semibold`}
                style={{
                  background: techColors[tech.name.charCodeAt(0) % 8], // Use modulo for consistent color mapping
                }}
              >
                {/* Generate initials from the first 1 or 2 words */}
                {tech.name.split(/\s+/).map(word => word.charAt(0)).slice(0, 2).join('').toUpperCase()}
              </div>
            )
          )}
        </div>

        <span className="text-[8px] sm:text-[10px] font-medium text-center tracking-wide text-gray-900 dark:text-gray-100 line-clamp-1 w-full">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

interface TechStackProps {
  technologies: Technology[];
  speed?: number; // Optional speed control (default 8)
}

export const TechStack: React.FC<TechStackProps> = ({ technologies, speed = 8 }) => {
  // Filter out any potential undefined/null technologies just in case
  const validTechnologies = technologies.filter(Boolean);

  if (!validTechnologies || validTechnologies.length === 0) {
    return null; // Don't render anything if no technologies are provided
  }

  return (
    <div className="relative mt-4 overflow-hidden">
      <motion.div
        className="flex gap-2 py-2 px-4"
        animate={{
          x: ["0%", `calc(-${validTechnologies.length * (16 + 0.5 * 4)}px)`], // Adjust calculation based on width + gap
                                                                            // Example: w-16 (64px) + gap-2 (8px) = 72px? Needs dynamic calc or simpler %
          // Using percentage might be simpler if card width is consistent relative to container
          // x: ["0%", "-50%"] // Simpler if duplicating the list works well visually
          transition: {
            duration: speed * (validTechnologies.length / 10), // Scale duration based on number of items
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }
        }}
        // Duplicating the array for seamless looping
      >
        {[...validTechnologies, ...validTechnologies].map((tech, index) => (
          <TechCard key={`tech-${tech.name}-${index}`} tech={tech} index={index} /> // More robust key
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Output directory
    outDir: 'build',
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // React core libraries
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            
            // All Radix UI components in one chunk
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            
            // Charts library
            if (id.includes('recharts')) {
              return 'recharts';
            }
            
            // Motion/animation libraries
            if (id.includes('motion')) {
              return 'motion';
            }
            
            // Form libraries
            if (id.includes('react-hook-form')) {
              return 'forms';
            }
            
            // Other UI libraries
            if (id.includes('lucide-react') || id.includes('sonner') || id.includes('vaul')) {
              return 'ui-libraries';
            }
            
            // Everything else from node_modules
            return 'vendor';
          }
        },
      },
    },
    
    // Enable minification (esbuild is faster and built-in)
    minify: 'esbuild',
    
    // Target modern browsers for better optimization
    target: 'esnext',
    
    // Optimize CSS
    cssCodeSplit: true,
    
    // Source maps
    sourcemap: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      '@radix-ui/react-slot',
      'lucide-react',
    ],
  },
})
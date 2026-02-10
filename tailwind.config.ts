import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg-main)',
          section: 'var(--bg-section)',
          subtle: 'var(--bg-subtle)'
        },
        text: {
          heading: 'var(--text-heading)',
          body: 'var(--text-body)'
        },
        foreground: {
          DEFAULT: 'var(--fg)',
          headers: 'var(--fg-headers)',
          muted: 'var(--fg-muted)'
        },
        card: 'var(--card)',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'var(--green)',
          light: 'var(--light-green)',
          dark: 'var(--dark-green)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // Domani Sub-Theme
        domani: {
          sage: {
            primary: 'var(--domani-sage-primary)',
            dark: 'var(--domani-sage-dark)',
            light: 'var(--domani-sage-light)'
          },
          text: {
            primary: 'var(--domani-text-primary)',
            secondary: 'var(--domani-text-secondary)',
            accent: 'var(--domani-text-accent)'
          },
          bg: {
            cream: 'var(--domani-bg-cream)',
            'cream-light': 'var(--domani-bg-cream-light)',
            'sage-tint': 'var(--domani-bg-sage-tint)',
            card: 'var(--domani-bg-card)'
          },
          priority: {
            high: 'var(--domani-priority-high)',
            'high-dark': 'var(--domani-priority-high-dark)',
            medium: 'var(--domani-priority-medium)',
            'medium-dark': 'var(--domani-priority-medium-dark)'
          },
          border: {
            light: 'var(--domani-border-light)'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)']
      },
      maxWidth: {
        custom: '1400px'
      },
      spacing: {
        'x-gap': '1.5rem',
        'y-gap': '2.5rem'
      },
      backgroundImage: {
        // Domani Sub-Theme Gradients
        'domani-hero': 'var(--domani-gradient-hero)',
        'domani-sage': 'var(--domani-gradient-sage)',
        'domani-dark': 'var(--domani-gradient-dark)',
        'domani-card-placeholder': 'var(--domani-gradient-card-placeholder)'
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
export default config

import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg-main)',
          section: 'var(--bg-section)',
          subtle: 'var(--bg-subtle)',
          card: 'var(--bg-card)'
        },
        text: {
          heading: 'var(--text-heading)',
          body: 'var(--text-body)',
          accent: 'var(--text-accent)'
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
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)'
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
        priority: {
          high: 'var(--priority-high)',
          'high-dark': 'var(--priority-high-dark)',
          medium: 'var(--priority-medium)',
          'medium-dark': 'var(--priority-medium-dark)'
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
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-sage': 'var(--gradient-sage)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-card-placeholder': 'var(--gradient-card-placeholder)'
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
export default config

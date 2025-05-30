'use client'

import { cn } from '@/lib/utils'
import { FadeUpSection } from '../animations'

interface SectionTitleProps {
  position: string
  header: string
  underline?: boolean
}

export function SectionTitle({
  position,
  header,
  underline = false
}: SectionTitleProps) {
  return (
    <FadeUpSection>
      <h3
        className={cn(
          'mb-6',
          underline ? 'underline thickness-4 underline-offset-4' : ''
        )}>
        {position} {header}
      </h3>
    </FadeUpSection>
  )
}

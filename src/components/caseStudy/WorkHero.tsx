'use client'

import React from 'react'
import { SlideInSection } from '../animations'

interface WorkHeroProps {
  img?: string
  header: string
  descriptor: string
  subDescriptor?: string
  badgeText?: string
  badgeClassName?: string
  titleClassName?: string
  tagClassName?: string
  tags?: Array<{ icon: React.ReactNode; label: string }>
  ctaUrl?: string
  ctaLabel?: string
}

export default function WorkHero({
  img,
  header,
  descriptor,
  subDescriptor,
  badgeText,
  badgeClassName,
  titleClassName,
  tagClassName,
  tags,
  ctaUrl,
  ctaLabel
}: WorkHeroProps) {
  const defaultBadge =
    'text-sm text-text-body border border-[var(--border-subtle)] rounded-full px-4 py-1.5'
  const defaultTag =
    'flex items-center gap-2 text-sm text-text-body border border-[var(--border-subtle)] rounded-full px-4 py-1.5'

  return (
    <section className="page min-h-[75vh] flex items-center pt-16">
      <div className="section flex flex-col gap-6 items-center space-y-4">
        <SlideInSection className="text-center space-y-4 flex flex-col gap-6">
          {badgeText && (
            <span className={`${badgeClassName || defaultBadge} self-center`}>
              {badgeText}
            </span>
          )}
          <h1 className={titleClassName}>{header}</h1>
          <p>{descriptor}</p>
          {subDescriptor && (
            <p className="text-sm text-text-body">{subDescriptor}</p>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {tags.map((tag, index) => (
                <span key={index} className={tagClassName || defaultTag}>
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </div>
          )}
          {ctaUrl && (
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 text-primary hover:font-bold text-sm">
              {ctaLabel || 'View Live Site'} &rarr;
            </a>
          )}
        </SlideInSection>
        {img && (
          <SlideInSection>
            <img
              src={img}
              alt={`${header} mockup`}
              className="h-[60vh] w-full object-contain"
              loading="eager"
            />
          </SlideInSection>
        )}
      </div>
    </section>
  )
}

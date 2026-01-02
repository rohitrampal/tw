import { HeroSection } from '@/components/home/hero-section';
import { ProblemStatementSection } from '@/components/home/problem-statement-section';
import { CoreOfferingsSection } from '@/components/home/core-offerings-section';
import { ToolsPreviewSection } from '@/components/home/tools-preview-section';
import { ProofSection } from '@/components/home/proof-section';
import { PraxioPreviewSection } from '@/components/home/praxio-preview-section';
import { CaseStudyPreviewSection } from '@/components/home/case-study-preview-section';
import { FinalCTASection } from '@/components/home/final-cta-section';
import { SliderSection } from '@/components/home/slider-section';

export default function HomePage() {
  return (
    <>
      <SliderSection />
      <HeroSection />
      <ProblemStatementSection />
      <CoreOfferingsSection />
      <ToolsPreviewSection />
      <ProofSection />
      <PraxioPreviewSection />
      <CaseStudyPreviewSection />
      <FinalCTASection />
    </>
  );
}


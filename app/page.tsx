import Hero from "@/components/Hero";
import Overview from "@/components/sections/Overview";
import BriefChallenge from "@/components/sections/BriefChallenge";
import ResearchApproach from "@/components/sections/ResearchApproach";
import MarketContext from "@/components/sections/MarketContext";
import CompetitiveLandscape from "@/components/sections/CompetitiveLandscape";
import StrategicOpportunity from "@/components/sections/StrategicOpportunity";
import UserResearch from "@/components/sections/UserResearch";
import CardSorting from "@/components/sections/CardSorting";
import JobsToBeDone from "@/components/sections/JobsToBeDone";
import ThreeModes from "@/components/sections/ThreeModes";
import DesignLanguage from "@/components/sections/DesignLanguage";
import ProblemEvolution from "@/components/sections/ProblemEvolution";
import Iterations from "@/components/sections/Iterations";
import DesignWhiteboard from "@/components/DesignWhiteboard";
import ModeDesigns from "@/components/sections/ModeDesigns";
import InformationArchitecture from "@/components/sections/InformationArchitecture";
import DesignSystem from "@/components/sections/DesignSystem";
import Validation from "@/components/sections/Validation";
import Monetization from "@/components/sections/Monetization";
import Constraints from "@/components/sections/Constraints";
import Reflection from "@/components/sections/Reflection";
import VideoAndPrototype from "@/components/sections/VideoAndPrototype";
import Footer from "@/components/Footer";
import SectionTimeline from "@/components/SectionTimeline";

export default function Home() {
  const mode1Screens = [
    {
      title: "Home - Recently Added",
      caption: "Paste link always accessible at top. Visual grid shows recent saves with quick actions.",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #5a3d6e 100%)",
      icon: "🏠",
    },
    {
      title: "Paste Link Preview",
      caption: "Instant preview from URL metadata. Shows image, price, store, category.",
      bg: "linear-gradient(135deg, #2a1e36 0%, #3D2B4C 100%)",
      icon: "🔗",
    },
    {
      title: "Save to Collection",
      caption: "Bottom sheet modal for quick save. Multiple collection selection supported.",
      bg: "linear-gradient(135deg, #4a3560 0%, #6b3fa0 100%)",
      icon: "💾",
    },
    {
      title: "Collection Detail",
      caption: 'Items/Outfits tabs together. Organized by occasion (e.g., "Summer Vacation").',
      bg: "linear-gradient(135deg, #3D2B4C 0%, #7b4fb5 100%)",
      icon: "🗂️",
    },
  ];

  const mode2Screens = [
    {
      title: "Try-On Canvas",
      caption: "25/75 split layout. Category picker top, items grid bottom. See avatar + items simultaneously.",
      bg: "linear-gradient(135deg, #1a1520 0%, #3D2B4C 100%)",
      icon: "✨",
    },
    {
      title: "Item Selection",
      caption: "Fashion logic enforced: one top, one bottom, multiple accessories. Clear selected state.",
      bg: "linear-gradient(135deg, #2a1e36 0%, #4a3560 100%)",
      icon: "👗",
    },
    {
      title: "Generating...",
      caption: "Processing state with clear messaging. Loading animation builds anticipation.",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #6b3fa0 100%)",
      icon: "⚡",
    },
    {
      title: "Post-Generation Result",
      caption: "Save, Share, Regenerate options immediately available. Shows items used + total price.",
      bg: "linear-gradient(135deg, #4a3560 0%, #8b5fc0 100%)",
      icon: "🎉",
    },
  ];

  const mode3Screens = [
    {
      title: "Try-On History",
      caption: "Timeline list shows chronological generation history. Saved vs unsaved clearly distinguished.",
      bg: "linear-gradient(135deg, #1a1520 0%, #2a1e36 100%)",
      icon: "📋",
    },
    {
      title: "Outfit Detail (Saved)",
      caption: '"Items used" section like recipe ingredients. Each item tappable for purchase.',
      bg: "linear-gradient(135deg, #2a1e36 0%, #3D2B4C 100%)",
      icon: "❤️",
    },
    {
      title: "Item Detail",
      caption: "Shows collections it's in + outfits using this item. Demonstrates relationships.",
      bg: "linear-gradient(135deg, #3D2B4C 0%, #5a3d6e 100%)",
      icon: "🔍",
    },
    {
      title: "Collections Grid View",
      caption: "Visual browsing of curated outfits. 2-column grid optimized for scanning.",
      bg: "linear-gradient(135deg, #4a3560 0%, #6b3fa0 100%)",
      icon: "🗃️",
    },
  ];

  return (
    <main className="bg-[#FAF9FA] dark:bg-[#1a1520] min-h-screen lg:ml-[220px]">
      <SectionTimeline />
      <Hero />
      <Overview />
      <BriefChallenge />
      <ResearchApproach />
      <MarketContext />
      <CompetitiveLandscape />
      <StrategicOpportunity />
      <UserResearch />
      <CardSorting />
      <JobsToBeDone />
      <ThreeModes />
      <DesignLanguage />
      <ProblemEvolution />
      <Iterations />

      {/* Mode 1: BEFORE — grouped */}
      <div className="border-l-4 border-[#3D2B4C]/25 dark:border-purple-500/30 ml-2 md:ml-6">
        <ModeDesigns
          id="mode1-designs"
          sectionNumber="13"
          modeTitle="Mode 1: BEFORE"
          subtitle="Collecting & Organizing"
          intro="The BEFORE mode focuses on quick saving and flexible organization. Users can paste links from any store and organize items by occasion."
          screens={mode1Screens}
          flowSteps={["See item online", "Copy link", "Open Atelia", "Paste link", "Preview", "Save to collection"]}
        />
        <DesignWhiteboard
          mode="mode1"
          sectionNumber="14"
          title="Design Decisions"
          subtitle="Mode 1: BEFORE"
          description="9 key choices that shaped the collecting and organizing experience. Click any sticky note to explore the rationale, options considered, and impact of each decision."
        />
      </div>

      {/* Mode 2: DURING — grouped */}
      <div className="border-l-4 border-[#3D2B4C]/25 dark:border-purple-500/30 ml-2 md:ml-6">
        <ModeDesigns
          id="mode2-designs"
          sectionNumber="15"
          modeTitle="Mode 2: DURING"
          subtitle="Creating & Experimenting"
          intro="The DURING mode is about playful experimentation. Users mix items from their collection to generate AI outfit visualizations."
          screens={mode2Screens}
          feature={{
            icon: "✨",
            title: "On-Demand Model Setup",
            text: "Model creation happens when user first tries Try-On, not forced during signup. Reduces onboarding friction while maintaining feature quality.",
          }}
        />
        <DesignWhiteboard
          mode="mode2"
          sectionNumber="16"
          title="Design Decisions"
          subtitle="Mode 2: DURING"
          description="8 key choices that shaped the Try-On canvas experience. Click any sticky note to explore the rationale, options considered, and impact of each decision."
        />
      </div>

      {/* Mode 3: AFTER — grouped */}
      <div className="border-l-4 border-[#3D2B4C]/25 dark:border-purple-500/30 ml-2 md:ml-6">
        <ModeDesigns
          id="mode3-designs"
          sectionNumber="17"
          modeTitle="Mode 3: AFTER"
          subtitle="Reviewing & Deciding"
          intro='The AFTER mode helps users review results, save favorites, and make purchase decisions. Like a recipe, outfits show their "ingredients."'
          screens={mode3Screens}
        />
        <DesignWhiteboard
          mode="mode3"
          sectionNumber="18"
          title="Design Decisions"
          subtitle="Mode 3: AFTER"
          description="8 key choices that shaped the history and reviewing experience. Click any sticky note to explore the rationale, options considered, and impact of each decision."
        />
      </div>

      {/* System-level decisions */}
      <DesignWhiteboard
        mode="system"
        sectionNumber="19"
        title="System-Level Decisions"
        subtitle="Cross-Cutting Choices"
        description="9 decisions that shaped the entire app's structure, visual language, and strategic positioning. These choices defined the system as a whole."
      />

      <InformationArchitecture />
      <DesignSystem />
      <Validation />
      <Monetization />
      <Constraints />
      <Reflection />
      <VideoAndPrototype />
      <Footer />
    </main>
  );
}

export interface DecisionOption {
  id: string;
  letter: string;
  text: string;
  pros?: string;
  cons?: string;
  chosen: boolean;
}

export interface Decision {
  id: string;
  title: string;
  category: string;
  context: string;
  options: DecisionOption[];
  rationale: string;
  impact: string;
  figmaUrl?: string;
  screensUrl?: string;
  mode: "mode1" | "mode2" | "mode3" | "system";
}

export const decisions: Record<string, Decision> = {
  // MODE 1 DECISIONS (6)
  "collections-structure": {
    id: "collections-structure",
    title: "Collections Hold Items + Outfits",
    category: "Navigation & IA",
    context: "Should collections only hold items, only outfits, or both?",
    mode: "mode1",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Separate Items/Outfits sections (like Stylebook)",
        pros: "Clear categorization",
        cons: "Breaks user mental model",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Items only (like Pinterest)",
        pros: "Simpler data model",
        cons: "Generated outfits have nowhere to live",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Both in same collection",
        pros: "Matches how users think",
        cons: "More complex UI (requires tabs)",
        chosen: true,
      },
    ],
    rationale:
      "Research showed 4/5 users organize by occasion, not type. Card sorting validated this pattern. Reference: Pinterest boards and photo albums mix content types. Users think 'What do I need for vacation?' not 'What tops do I have?'",
    impact:
      "Collections became flexible containers organized around user intent, not technical constraints. This allows both items and outfits to live in 'Summer Vacation' or 'Date Night' collections naturally.",
    screensUrl: "#mode1-designs",
  },

  "paste-link": {
    id: "paste-link",
    title: "Paste Link vs Manual Entry",
    category: "Interaction Patterns",
    context: "How should users add items to the app?",
    mode: "mode1",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Manual entry (type details)",
        pros: "Complete control",
        cons: "High friction, slow",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Upload photo",
        pros: "Works offline",
        cons: "No link to buy later",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Paste link (URL scraping)",
        pros: "Fast, automatic metadata",
        cons: "Requires working link",
        chosen: true,
      },
    ],
    rationale:
      "Users already share links with friends (validated in research). Paste link is the fastest path with lowest friction. URL scraping provides automatic preview, price, store info. Users can still upload photos as fallback.",
    impact:
      "Paste link became the primary entry point, reducing save time from ~60 seconds (manual) to ~5 seconds. This aligned with the 'quick save while browsing' behavior pattern.",
    screensUrl: "#mode1-designs",
  },

  "save-flow": {
    id: "save-flow",
    title: "Immediate Preview Save Flow",
    category: "Interaction Patterns",
    context:
      "When should users see the item preview and collection selection?",
    mode: "mode1",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Save first, organize later",
        pros: "Fastest save",
        cons: "Items pile up in 'Unsorted'",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Preview then select collection",
        pros: "Organized from start",
        cons: "Slightly slower",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Auto-categorize with AI",
        pros: "Zero user effort",
        cons: "Often wrong, frustrating",
        chosen: false,
      },
    ],
    rationale:
      "Research showed users forget to organize items saved to generic folders. Pinterest users mentioned boards full of 'random stuff.' Immediate preview + collection selection takes only 2 extra seconds but ensures items are organized from the start.",
    impact:
      "Preview + save modal became the standard flow. Items go directly into collections rather than accumulating in 'Saved.' Reduces organization debt.",
    screensUrl: "#mode1-designs",
  },

  "bottom-sheets": {
    id: "bottom-sheets",
    title: "Bottom Sheets for Secondary Actions",
    category: "Interaction Patterns",
    context:
      "How should secondary actions (collection selection, filters) be presented?",
    mode: "mode1",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Full-screen modal",
        pros: "Maximum space",
        cons: "Breaks context, feels heavy",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Dropdown menu",
        pros: "Stays in context",
        cons: "Limited space for complex choices",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Bottom sheet (partial overlay)",
        pros: "Context preserved + enough space",
        cons: "Can feel heavy if overused",
        chosen: true,
      },
    ],
    rationale:
      "iOS design patterns favor bottom sheets for secondary flows. Users can still see the context below. Bottom sheets signal 'secondary' rather than 'new screen.' Reference: Apple Maps, Google Maps use this pattern extensively.",
    impact:
      "Bottom sheets became the standard for save-to-collection, filters, and item actions. Reduced perceived navigation depth while providing ample space for options.",
    screensUrl: "#mode1-designs",
  },

  "recently-added": {
    id: "recently-added",
    title: "Recently Added as Home Entry Point",
    category: "Navigation & IA",
    context: "What should the Home tab show as its primary content?",
    mode: "mode1",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Collections grid (all collections)",
        pros: "Overview of everything",
        cons: "Hides recent activity",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Recently Added items feed",
        pros: "Shows latest saves immediately",
        cons: "Less organized feel",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Recommended/AI curated",
        pros: "Personalized",
        cons: "Requires data, feels intrusive early",
        chosen: false,
      },
    ],
    rationale:
      "Users return to the app most often immediately after saving. 'What did I just save?' is the primary re-engagement question. Reference: Camera roll shows recent first. Pinterest home shows recent pins. Recency is the most relevant organizing principle for frequent returners.",
    impact:
      "Home became a 'recent saves' feed with quick access to collections. Users can immediately see their latest saves without navigating. Paste link always accessible at top.",
    screensUrl: "#mode1-designs",
  },

  "card-sizing": {
    id: "card-sizing",
    title: "Square Items, Portrait Outfits",
    category: "Visual Design",
    context: "What dimensions should item cards and outfit cards use?",
    mode: "mode1",
    options: [
      {
        id: "a",
        letter: "A",
        text: "All square (1:1 ratio)",
        pros: "Consistent grid",
        cons: "Outfits feel cropped",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "All portrait (2:3 ratio)",
        pros: "Great for outfits",
        cons: "Items feel stretched/padded",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Square items (1:1) + Portrait outfits (2:3)",
        pros: "Each format fits content",
        cons: "Different grid systems needed",
        chosen: true,
      },
    ],
    rationale:
      "Individual clothing items are typically square (product photos). Full outfit visualizations are portrait (head to toe). Using the right ratio for each type improves visual communication without requiring extra padding or cropping.",
    impact:
      "136×136px for items, 136×200px for outfits. The visual difference helps users instantly distinguish types at a glance, even before reading labels.",
    screensUrl: "#mode1-designs",
  },

  // MODE 2 DECISIONS (7)
  "canvas-split": {
    id: "canvas-split",
    title: "Canvas 25/75 Split Layout",
    category: "Interaction Patterns",
    context: "How should the Try-On canvas be structured?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Full-screen canvas",
        pros: "Maximum preview size",
        cons: "Can't see available items while selecting",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Side-by-side (50/50)",
        pros: "Equal importance",
        cons: "Canvas too small on mobile",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "25/75 split (canvas top, items bottom)",
        pros: "See avatar + items simultaneously",
        cons: "Canvas smaller than ideal",
        chosen: true,
      },
    ],
    rationale:
      "Users need to see both their avatar (to understand current outfit) and available items (to make next selection). Testing showed 25/75 split allows quick scanning of items while maintaining avatar visibility. The canvas is large enough to see outfit clearly.",
    impact:
      "Split layout became the standard Try-On interface. Users can build outfits without losing context of what they already selected.",
    screensUrl: "#mode2-designs",
  },

  "category-picker": {
    id: "category-picker",
    title: "Category Tabs for Item Browsing",
    category: "Navigation & IA",
    context: "How should users navigate between item categories in Try-On?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Dropdown selector",
        pros: "Compact",
        cons: "Hidden options, requires tap to see",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Horizontal scrolling tabs",
        pros: "All options visible, quick switch",
        cons: "Takes vertical space",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Grid of category icons",
        pros: "Visual",
        cons: "Takes too much space in split layout",
        chosen: false,
      },
    ],
    rationale:
      "In the split layout, users frequently switch between tops, bottoms, and accessories. Horizontal tabs keep all options visible with one-tap access. Reference: Mobile shopping apps use this pattern consistently.",
    impact:
      "Tabs at top of item panel allow quick category switching. The selected category is clearly highlighted, and item grid updates instantly.",
    screensUrl: "#mode2-designs",
  },

  "fashion-logic": {
    id: "fashion-logic",
    title: "Fashion Logic Enforcement",
    category: "Product Decisions",
    context: "Should the app enforce fashion rules (one top, one bottom)?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "No rules, select anything",
        pros: "Maximum freedom",
        cons: "Users can create nonsensical outfits",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Strict rules (exactly 1 top, 1 bottom)",
        pros: "Always coherent",
        cons: "Too rigid, frustrating",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Soft rules (1 top, 1 bottom, multiple accessories)",
        pros: "Guides without restricting",
        cons: "Some edge cases",
        chosen: true,
      },
    ],
    rationale:
      "Fashion has implicit rules. Users expect coherent outfit generation. But strict enforcement prevents valid combinations (2 layered tops, dress + jacket). Soft rules guide novices while allowing experienced users to experiment.",
    impact:
      "Category slots guide selection. Selecting a second top automatically deselects the first. Accessories have no limit. Users can override by changing categories.",
    screensUrl: "#mode2-designs",
  },

  "regenerate-flow": {
    id: "regenerate-flow",
    title: "Post-Generation Actions",
    category: "Interaction Patterns",
    context: "What actions should be immediately available after outfit generation?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Auto-save to history",
        pros: "Nothing lost",
        cons: "History fills with bad generations",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Explicit save button only",
        pros: "User control",
        cons: "Friction, users might forget",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Show result with Save/Share/Regenerate",
        pros: "Clear next steps, user decides",
        cons: "More taps required",
        chosen: true,
      },
    ],
    rationale:
      "Users need to evaluate the result before deciding what to do with it. The three actions map to the three most common responses: 'I like it' (save), 'I want to share it' (share), 'Try again' (regenerate). All generations auto-save to History as a safety net.",
    impact:
      "Post-generation sheet shows outfit prominently with three clear actions. Items used and total price shown below. This moment became a key engagement point.",
    screensUrl: "#mode2-designs",
  },

  "model-setup": {
    id: "model-setup",
    title: "On-Demand vs. Onboarding Model Setup",
    category: "Product Decisions",
    context: "When should the AI model creation (photo upload) happen?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Required during signup",
        pros: "Ready immediately",
        cons: "High friction, many dropoffs",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Optional during onboarding",
        pros: "Lower friction",
        cons: "Users forget, never set up",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "First time user taps Try-On",
        pros: "Context-appropriate, high intent",
        cons: "Interrupts flow",
        chosen: true,
      },
    ],
    rationale:
      "Research showed users were hesitant to upload photos without understanding the value. Delaying to the moment they want to use Try-On means they've already decided they want the feature. High intent = higher completion rate. Privacy explainer is shown in context.",
    impact:
      "Onboarding reduced from 6 steps to 3. Model setup completion rate expected to be higher due to contextual motivation. Privacy concerns addressed in-moment with clear explainers.",
    screensUrl: "#mode2-designs",
  },

  "photo-capture": {
    id: "photo-capture",
    title: "Photo Guidance for Model Creation",
    category: "Interaction Patterns",
    context: "How should the app guide users to take good photos for AI model?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Text instructions only",
        pros: "Simple",
        cons: "Users don't read, bad photos",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Example photos shown",
        pros: "Visual guidance",
        cons: "Users may not follow",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Silhouette overlay in camera",
        pros: "Real-time guidance",
        cons: "More engineering effort",
        chosen: true,
      },
    ],
    rationale:
      "AI quality is directly dependent on input photo quality. Better guidance = better results = higher user satisfaction. Silhouette overlay shows exactly where to stand and what angle. Reference: Face ID setup uses this approach successfully.",
    impact:
      "Camera view shows silhouette guide. When photo matches, capture button enables. This significantly reduces bad photo submissions and improves try-on quality.",
    screensUrl: "#mode2-designs",
  },

  "processing-states": {
    id: "processing-states",
    title: "AI Processing State Design",
    category: "Visual Design",
    context: "How should the app communicate while AI generates the outfit?",
    mode: "mode2",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Simple spinner",
        pros: "Minimal",
        cons: "Boring, no context on time",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Progress bar with percentage",
        pros: "Shows progress",
        cons: "Can't accurately predict AI time",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Animated skeleton with descriptive copy",
        pros: "Manages expectations, builds anticipation",
        cons: "More design work",
        chosen: true,
      },
    ],
    rationale:
      "AI generation takes 5-15 seconds. Users need reassurance that something is happening and a reason to wait. Descriptive copy ('Generating your look...') creates anticipation. Skeleton animation implies something forming. Reference: Midjourney's generation process creates excitement, not frustration.",
    impact:
      "Loading state uses animated skeleton overlay on avatar area, with rotating copy ('Analyzing your style...', 'Combining items...'). Reduces perceived wait time.",
    screensUrl: "#mode2-designs",
  },

  // MODE 3 DECISIONS (6)
  "history-list-grid": {
    id: "history-list-grid",
    title: "History as List vs. Grid",
    category: "Visual Design",
    context: "Should Try-On history be displayed as a list or grid?",
    mode: "mode3",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Grid (like Collections)",
        pros: "Visual, scannable",
        cons: "Loses chronological context",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Timeline list with date headers",
        pros: "Chronological context clear",
        cons: "Less visual impact",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Infinite scroll feed",
        pros: "Familiar pattern",
        cons: "Hard to find specific items",
        chosen: false,
      },
    ],
    rationale:
      "History answers 'What did I generate?' - a chronological question. Collections answer 'What have I organized?' - a categorical question. Different questions = different UI. List with date headers (Today, Yesterday, Last Week) provides navigation anchors. Reference: Camera roll, iMessage both use this pattern.",
    impact:
      "History uses timeline list with date headers. Each entry shows outfit thumbnail + items used + timestamp + saved status. Very different feel from Collections grid, which is intentional.",
    screensUrl: "#mode3-designs",
  },

  "timeline-layout": {
    id: "timeline-layout",
    title: "History Card Layout",
    category: "Visual Design",
    context: "What information should each history entry show?",
    mode: "mode3",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Outfit thumbnail only",
        pros: "Visual focus",
        cons: "No context about items used",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Thumbnail + full item list",
        pros: "Complete information",
        cons: "Cards too tall, list too long",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Thumbnail + items used strip + metadata",
        pros: "Balanced info density",
        cons: "Complex card component",
        chosen: true,
      },
    ],
    rationale:
      "Users want to quickly identify which history entry they want to expand. The outfit thumbnail identifies the look, the items strip shows what was used, and metadata (time, saved status) provides context. This allows fast scanning without opening every card.",
    impact:
      "345×96px history cards with 80px outfit thumbnail, horizontal items strip, and timestamp. Saved badge clearly distinguishes saved vs. unsaved generations.",
    screensUrl: "#mode3-designs",
  },

  "outfit-detail": {
    id: "outfit-detail",
    title: "Outfit Detail Screen Structure",
    category: "Navigation & IA",
    context: "How should the outfit detail page be organized?",
    mode: "mode3",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Outfit image full screen with overlay actions",
        pros: "Maximum visual impact",
        cons: "Actions buried, hard to read items",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Outfit image + actions + items below",
        pros: "Everything visible, logical flow",
        cons: "Requires scrolling on small screens",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Split screen (outfit left, items right)",
        pros: "No scrolling",
        cons: "Items too small to see clearly",
        chosen: false,
      },
    ],
    rationale:
      "The outfit image is the hero content. Below it, users need to know what items were used (to purchase) and what actions they can take (save, share, regenerate). Recipe apps use this structure: hero photo → ingredients → instructions. Familiar and logical.",
    impact:
      "Outfit detail shows full outfit image, followed by Save/Share/Regenerate actions, then 'Items Used' section with individual item cards and buy links.",
    screensUrl: "#mode3-designs",
  },

  "items-used": {
    id: "items-used",
    title: "Items Used as Recipe Ingredients",
    category: "Product Decisions",
    context: "How should the relationship between outfits and items be shown?",
    mode: "mode3",
    options: [
      {
        id: "a",
        letter: "A",
        text: "List of item names with links",
        pros: "Functional",
        cons: "Not visual, easy to ignore",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Visual item cards with buy buttons",
        pros: "Actionable, visual",
        cons: "Takes space",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Collapsed section (tap to expand)",
        pros: "Saves space",
        cons: "Hidden purchase path",
        chosen: false,
      },
    ],
    rationale:
      "The 'items used' section is a key business moment - it's the path to purchase. Making it visual and obvious (like recipe ingredients) maximizes the chance users will click through to buy. Each item shows image, name, price, and store. Framing as 'ingredients' aligns with the recipe mental model.",
    impact:
      "Items Used section shows visual cards for each item, each tappable to open the original store link. Total outfit price shown. This is the primary conversion path.",
    screensUrl: "#mode3-designs",
  },

  "saved-unsaved": {
    id: "saved-unsaved",
    title: "Saved vs. Unsaved State Distinction",
    category: "Visual Design",
    context: "How should saved outfits look different from unsaved ones in history?",
    mode: "mode3",
    options: [
      {
        id: "a",
        letter: "A",
        text: "No visual distinction (just a save button)",
        pros: "Simple",
        cons: "Hard to scan what's saved",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Saved badge + different opacity",
        pros: "Immediately scannable",
        cons: "Slightly complex",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Separate sections (Saved / Unsaved)",
        pros: "Completely separate",
        cons: "Breaks chronological flow",
        chosen: false,
      },
    ],
    rationale:
      "Users need to quickly find previously saved outfits among a longer history. A visual badge (like a heart fill state) immediately communicates status without reading. Unsaved items appear at lower opacity to recede. Saved items are full brightness with badge.",
    impact:
      "Saved outfits show filled bookmark icon + plum badge. Unsaved show outlined bookmark. Visual weight draws eye to saved items while maintaining chronological context.",
    screensUrl: "#mode3-designs",
  },

  "item-detail-outfits": {
    id: "item-detail-outfits",
    title: "Item Detail Shows Related Outfits",
    category: "Navigation & IA",
    context: "What should the item detail page show beyond basic item info?",
    mode: "mode3",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Just item details (image, price, link)",
        pros: "Simple",
        cons: "Misses relationship context",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Item details + collections it's in + outfits using it",
        pros: "Shows full relationship graph",
        cons: "More complex screen",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "Item details + similar items",
        pros: "Discovery focused",
        cons: "Wrong use case for existing items",
        chosen: false,
      },
    ],
    rationale:
      "An item's value comes from its relationships: which collections organize it and which outfits it appears in. This relational view helps users understand their wardrobe holistically. Reference: Music apps show 'Albums featuring this track.' The item becomes a node in a network.",
    impact:
      "Item detail shows: image, store link, price, Collections containing it, and Outfits featuring it. Users can tap any outfit to navigate to it, creating a connected browsing experience.",
    screensUrl: "#mode3-designs",
  },

  // SYSTEM DECISIONS (8)
  "three-modes-framework": {
    id: "three-modes-framework",
    title: "Three Behavioral Modes Framework",
    category: "Product Strategy",
    context: "How should the app be mentally organized for designers and users?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Feature-based: Save, Try-On, Browse",
        pros: "Clear features",
        cons: "Doesn't reflect user journey",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Tab-based: Home, Try-On, Profile",
        pros: "Simple navigation",
        cons: "Hides behavioral context from design process",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Behavioral: BEFORE/DURING/AFTER",
        pros: "Design decisions map to user mindset",
        cons: "Framework only (not reflected in UI labels)",
        chosen: true,
      },
    ],
    rationale:
      "Early design attempts had all features but no coherent structure. Adding BEFORE/DURING/AFTER as a design framework (not UI labels) made every decision easier to evaluate. 'Does this serve someone actively browsing? Someone currently creating? Someone reviewing results?' Reference: Jobs-to-be-done and user journey mapping.",
    impact:
      "Every screen, pattern, and component was evaluated against its mode. This prevented feature creep and kept interactions contextually appropriate. Design reviews became faster with a clear evaluation criteria.",
  },

  "language-definition": {
    id: "language-definition",
    title: "Defining Core Language (Item/Outfit/Collection/Saved)",
    category: "Product Strategy",
    context: "What terms should the app use for its core concepts?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Fashion terms: Pieces, Looks, Wardrobes, Library",
        pros: "Fashion-appropriate",
        cons: "Ambiguous (what's a 'Look'?)",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Technical terms: Products, Generations, Folders, All Items",
        pros: "Precise",
        cons: "Too cold, not user-friendly",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Simple terms: Items, Outfits, Collections, Saved",
        pros: "Clear, everyday language",
        cons: "None significant",
        chosen: true,
      },
    ],
    rationale:
      "Unclear language causes user confusion. 'Item' vs. 'Outfit' distinction is critical because they have different sources (paste link vs. AI generation) and different card shapes. 'Collection' implies curation by the user. 'Saved' implies a superset. All terms needed to be unambiguous for users and consistent across all copywriting.",
    impact:
      "Consistent language reduced user confusion in testing. Terms appear consistently in empty states, instructions, and buttons. 'Save to Collection' vs. 'Add to Library' - the former is clearer about the action.",
  },

  "typography-pairing": {
    id: "typography-pairing",
    title: "Clash Display + DM Sans Pairing",
    category: "Visual Design",
    context: "Which typefaces should be used for headings and body text?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "SF Pro only (system font)",
        pros: "Native feel, no loading",
        cons: "Generic, no brand character",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Single custom font throughout",
        pros: "Consistent",
        cons: "Display fonts are hard to read small",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Clash Display (headings) + DM Sans (body)",
        pros: "Brand character + readability",
        cons: "Two fonts to load",
        chosen: true,
      },
    ],
    rationale:
      "Clash Display has geometric precision that suggests technology, but with humanist touches that suggest approachability. DM Sans is optimized for UI readability at small sizes. The contrast between display and body creates visual hierarchy. Reference: Many premium apps use contrasting serif/sans pairings.",
    impact:
      "Typography became a key brand differentiator. Clash Display headlines feel premium without being cold. DM Sans body text is highly readable. The contrast creates clear visual hierarchy.",
  },

  "color-evolution": {
    id: "color-evolution",
    title: "Purple → Plum Color Evolution",
    category: "Visual Design",
    context: "What should the primary brand color be?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Bright purple (#7B2FBE) - common AI color",
        pros: "Signals AI/tech",
        cons: "Overused, feels corporate",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Black - fashion/luxury",
        pros: "Sophisticated",
        cons: "Too serious, not approachable",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Plum (#3D2B4C) - deep, warm purple",
        pros: "Unique, warm, sophisticated but approachable",
        cons: "Darker, needs contrast checking",
        chosen: true,
      },
    ],
    rationale:
      "Purple signals AI and creativity, but bright purple feels corporate. Plum is deeper and warmer, suggesting luxury fashion without being intimidating. The warmth makes it feel more personal and consumer-friendly. The depth creates sophistication. Inspired by high-end fashion brand palettes that balance accessibility with aspiration.",
    impact:
      "Plum became the brand identity. Used for CTAs, highlights, and brand moments. The warmth of the color tests better with female-skewing fashion audiences. Accessibility: all plum/white combinations pass WCAG AA.",
  },

  "navigation-hierarchy": {
    id: "navigation-hierarchy",
    title: "Three-Tab Navigation Structure",
    category: "Navigation & IA",
    context: "How many tabs should the app have and what are they?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "5 tabs: Home, Saved, Try-On, History, Profile",
        pros: "All sections accessible",
        cons: "Too many, cognitive overload",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "2 tabs: Saved, Try-On",
        pros: "Minimal",
        cons: "Too few - history and profile lost",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "3 tabs: Home, Try-On, Profile",
        pros: "Minimal, each maps to behavioral mode",
        cons: "Some content deeper in hierarchy",
        chosen: true,
      },
    ],
    rationale:
      "3 tabs is the optimal iOS navigation structure for this app scope. Home = BEFORE (collecting/organizing), Try-On = DURING (creating), Profile = AFTER (reviewing history) + account. Each tab has a clear purpose. History lives within Try-On tab as a secondary screen, which is appropriate since it's the 'history of Try-On' not 'saved items.'",
    impact:
      "Three-tab structure kept navigation predictable. Users always knew where they were. No tab had more than 3 levels of navigation depth.",
  },

  "non-interactive-chips": {
    id: "non-interactive-chips",
    title: "Collection Chips as Labels, Not Filters",
    category: "Interaction Patterns",
    context: "Should collection chips on item cards be tappable (filter) or decorative (label)?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Tappable filters (filter to that collection)",
        pros: "Discoverable, powerful",
        cons: "Confusing intent - user might tap accidentally",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Non-interactive labels (show collection membership)",
        pros: "Clear, no accidental navigation",
        cons: "Less functional",
        chosen: true,
      },
      {
        id: "c",
        letter: "C",
        text: "No chips visible by default",
        pros: "Clean",
        cons: "Hides important context",
        chosen: false,
      },
    ],
    rationale:
      "User testing showed confusion when chips were tappable - users expected the chip to navigate AND show the item. Making chips non-interactive (labels only) clarified their purpose as context information. The card itself is the tappable element. This follows the principle of one primary action per card.",
    impact:
      "Collection chips show context without creating navigation confusion. Cards have a single tap target (the whole card). Chip clicks were dropped in favor of the card's primary action.",
  },

  "grid-system": {
    id: "grid-system",
    title: "8pt Grid System Adoption",
    category: "Visual Design",
    context: "What spacing system should be used throughout the app?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "No formal grid (eyeball spacing)",
        pros: "Flexible",
        cons: "Inconsistent, slow decisions",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "4pt grid (finer control)",
        pros: "More precision",
        cons: "Creates inconsistency with too many values",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "8pt grid (4, 8, 16, 24, 32, 40, 48px)",
        pros: "Consistent, efficient decisions",
        cons: "Requires strict adherence",
        chosen: true,
      },
    ],
    rationale:
      "8pt grids are the industry standard for iOS design. All Apple UI components align to 8pt. Using the same system means Atelia components feel native alongside iOS elements. The grid reduced spacing decisions from hundreds to ~7 standard values. Every spacing decision becomes fast and consistent.",
    impact:
      "All margins, padding, gaps, and component sizes align to 8pt grid. Reduced design time for spacing decisions by ~60%. Components feel visually consistent and aligned.",
  },

  "minimal-data": {
    id: "minimal-data",
    title: "Minimal Data Collection at Onboarding",
    category: "Product Decisions",
    context: "What user data should be collected during onboarding?",
    mode: "system",
    options: [
      {
        id: "a",
        letter: "A",
        text: "Full profile: height, weight, measurements, sizes by brand",
        pros: "Better personalization potential",
        cons: "High friction, privacy concerns",
        chosen: false,
      },
      {
        id: "b",
        letter: "B",
        text: "Name + email only",
        pros: "Minimal friction",
        cons: "Not enough for AI try-on",
        chosen: false,
      },
      {
        id: "c",
        letter: "C",
        text: "Name + email + photo (deferred)",
        pros: "Just enough data, deferred privacy moment",
        cons: "Photo still required eventually",
        chosen: true,
      },
    ],
    rationale:
      "User research revealed that height/weight/measurements are unnecessary - the AI model works from photos alone. Removing these fields cut onboarding from 6 steps to 3. Photo is deferred to first Try-On use (on-demand model setup decision). Less data = faster signup = less anxiety about privacy.",
    impact:
      "Onboarding: Name → Email → Password. 3 screens instead of 6. No measurements, no sizing info. AI model created from 2-3 full-body photos when first using Try-On. Prototype testing showed 100% onboarding completion vs. 60% for the full-data version.",
  },
};

export const decisionsByMode = {
  mode1: [
    "collections-structure",
    "paste-link",
    "save-flow",
    "bottom-sheets",
    "recently-added",
    "card-sizing",
  ],
  mode2: [
    "canvas-split",
    "category-picker",
    "fashion-logic",
    "regenerate-flow",
    "model-setup",
    "photo-capture",
    "processing-states",
  ],
  mode3: [
    "history-list-grid",
    "timeline-layout",
    "outfit-detail",
    "items-used",
    "saved-unsaved",
    "item-detail-outfits",
  ],
  system: [
    "three-modes-framework",
    "language-definition",
    "typography-pairing",
    "color-evolution",
    "navigation-hierarchy",
    "non-interactive-chips",
    "grid-system",
    "minimal-data",
  ],
};

// The live site mixes event photography with topic illustrations. Since
// original image assets aren't available here, each tile is rendered as a
// labelled icon card in the same grid layout — drop real photos into
// /src/assets/gallery and swap the `type: 'photo'` tiles for <img> tags.
export const galleryItems = [
  { type: 'photo', caption: 'Facilitating a training session', icon: 'PenTool' },
  { type: 'photo', caption: 'Speaking to a conference hall', icon: 'Presentation' },
  { type: 'topic', caption: 'ADHD', icon: 'Brain' },
  { type: 'topic', caption: 'EFT', icon: 'HeartPulse' },
  { type: 'topic', caption: 'EMDR', icon: 'Eye' },
  { type: 'topic', caption: 'BPD', icon: 'HeartCrack' },
  { type: 'photo', caption: 'Couples therapy session', icon: 'HeartHandshake' },
  { type: 'photo', caption: 'Family therapy session', icon: 'Users' },
  { type: 'topic', caption: 'IFS', icon: 'CircleDot' },
  { type: 'topic', caption: 'Kink Affirmative Therapy', icon: 'KeyRound' },
  { type: 'topic', caption: 'Body Dysmorphia', icon: 'ScanFace' },
  { type: 'photo', caption: 'Individual therapy session', icon: 'UserRound' },
  { type: 'topic', caption: 'Inner Child Therapy', icon: 'Flower2' },
  { type: 'photo', caption: 'Working from the studio', icon: 'Laptop' },
  { type: 'topic', caption: 'Trauma-Informed Care', icon: 'ShieldCheck' },
]

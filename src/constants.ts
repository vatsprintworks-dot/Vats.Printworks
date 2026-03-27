import { 
  Layers, 
  StickyNote, 
  Monitor, 
  BookOpen, 
  Coffee, 
  Image as ImageIcon, 
  Shirt, 
  Calendar, 
  Frame, 
  FileText, 
  Send, 
  Menu, 
  Settings2,
  CheckCircle2,
  Palette,
  Zap,
  IndianRupee,
  ShoppingBag
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: "+91 9991115518",
  email: "vats.printworks@gmail.com",
  location: "Mundka Industrial Area, New Delhi",
  whatsapp: "919991115518"
};

export const SERVICES = [
  {
    id: 'flex',
    title: 'Flex Printing',
    description: 'Large scale outdoor & indoor flex banners.',
    icon: Layers,
    color: 'cyan'
  },
  {
    id: 'stickers',
    title: 'Stickers Printing',
    description: 'Custom vinyl & paper stickers for any surface.',
    icon: StickyNote,
    color: 'magenta'
  },
  {
    id: 'digital',
    title: 'Digital Printing',
    description: 'High-speed, high-quality document printing.',
    icon: Monitor,
    color: 'yellow'
  },
  {
    id: 'thesis',
    title: 'Thesis Printing',
    description: 'Professional binding & printing for academics.',
    icon: BookOpen,
    color: 'rich-black'
  },
  {
    id: 'mug',
    title: 'Mug Printing',
    description: 'Personalized ceramic mugs for gifts & branding.',
    icon: Coffee,
    color: 'cyan'
  },
  {
    id: 'canvas',
    title: 'Canvas / Photo Printing',
    description: 'Museum-quality canvas & photo enlargements.',
    icon: ImageIcon,
    color: 'magenta'
  },
  {
    id: 'tshirt',
    title: 'T-Shirt Printing',
    description: 'Custom apparel with vibrant print quality.',
    icon: Shirt,
    color: 'yellow'
  },
  {
    id: 'calendar',
    title: 'Calendar Printing',
    description: 'Wall & desk calendars for corporate gifting.',
    icon: Calendar,
    color: 'rich-black'
  },
  {
    id: 'frames',
    title: 'Photo Frames',
    description: 'Elegant framing solutions for your memories.',
    icon: Frame,
    color: 'cyan'
  },
  {
    id: 'pamphlets',
    title: 'Pamphlets Printing',
    description: 'Effective marketing flyers & pamphlets.',
    icon: FileText,
    color: 'magenta'
  },
  {
    id: 'flyers',
    title: 'Flyers Printing',
    description: 'Eye-catching flyers for events & promos.',
    icon: Send,
    color: 'yellow'
  },
  {
    id: 'menu',
    title: 'Menu Cards',
    description: 'Durable & stylish menus for restaurants.',
    icon: Menu,
    color: 'rich-black'
  },
  {
    id: 'binding',
    title: 'Spiral / Wiro Binding',
    description: 'Secure & professional document finishing.',
    icon: Settings2,
    color: 'cyan'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Print Quality',
    description: 'Industry-leading CMYK precision and clarity.',
    icon: CheckCircle2,
    color: 'cyan'
  },
  {
    title: 'Creative Designs',
    description: 'Expert design studio approach to every project.',
    icon: Palette,
    color: 'magenta'
  },
  {
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality.',
    icon: Zap,
    color: 'yellow'
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates for students and businesses.',
    icon: IndianRupee,
    color: 'rich-black'
  },
  {
    title: 'Bulk & Custom Orders',
    description: 'Scalable solutions for any order size.',
    icon: ShoppingBag,
    color: 'cyan'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choose Product',
    description: 'Select from our wide range of printing services.'
  },
  {
    step: '02',
    title: 'Upload / Design',
    description: 'Send your design or work with our creative team.'
  },
  {
    step: '03',
    title: 'Print & Deliver',
    description: 'We print with precision and deliver to your doorstep.'
  }
];

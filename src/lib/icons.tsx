import {
  Heart,
  Home,
  Users,
  AlertTriangle,
  Clock,
  Shield,
  BookOpen,
  Handshake,
  Activity,
  UserCheck,
  HeartHandshake,
  Sparkles,
  Phone,
  ClipboardCheck,
  GraduationCap,
  Sun,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Home,
  Users,
  AlertTriangle,
  Clock,
  Shield,
  BookOpen,
  Handshake,
  Activity,
  UserCheck,
  HeartHandshake,
  Sparkles,
  Phone,
  ClipboardCheck,
  GraduationCap,
  Sun,
  ArrowRight,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Heart;
}

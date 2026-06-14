// composables/useContactInfo.ts
// Shared contact data used by both desktop and mobile Contact page
// components (Card / MobileCard, ConnectWithUs / MobileConnect).

import { MessageCircle, Mail, Phone, MapPin, Camera, Facebook, Youtube, Compass } from 'lucide-vue-next'

export const useContactInfo = () => {
    const contactItems = [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+62 812-3456-7890',
            link: 'https://wa.me/6281234567890',
            helper: 'Chat with us on WhatsApp',
            helperEmphasis: true,
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@arrivalnusantara.com',
            link: 'mailto:info@arrivalnusantara.com',
            helper: "We'll reply to your email",
            helperEmphasis: true,
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+62 370 123 4567',
            link: 'tel:+623701234567',
            helper: 'Mon – Sun, 08:00 – 18:00 (WITA)',
            helperEmphasis: false,
        },
        {
            icon: MapPin,
            label: 'Office',
            value: 'Jl. Pariwisata No. 12, Senaru,\nLombok Utara, NTB 83354 Indonesia',
            helper: 'Visit us by appointment',
            helperEmphasis: false,
        },
    ]

    const socialLinks = [
        { icon: Camera, name: 'Instagram', handle: '@arrivalnusantara' },
        { icon: Facebook, name: 'Facebook', handle: 'Arrival Nusantara' },
        { icon: Youtube, name: 'YouTube', handle: 'Arrival Nusantara' },
        { icon: Compass, name: 'TripAdvisor', handle: 'Arrival Nusantara' },
    ]

    return { contactItems, socialLinks }
}
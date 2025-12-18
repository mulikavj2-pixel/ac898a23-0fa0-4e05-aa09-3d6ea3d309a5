"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, Users, TrendingUp, Calendar, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="noise"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="AutoMax"
          bottomLeftText="Premium Vehicles"
          bottomRightText="sales@automax.com"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Find Your Perfect Car Today"
          description="Explore our premium selection of quality vehicles with transparent pricing, flexible financing, and exceptional service. Drive home in your dream car."
          tag="Premium Selection"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054405966-xwrk23d1.jpg"
          imageAlt="Premium luxury car showroom"
          frameStyle="browser"
          metricsLabel="Trusted by thousands of satisfied car buyers across the region"
          metrics={[
            { id: "1", value: "5,000+", label: "Cars Sold" },
            { id: "2", value: "98%", label: "Customer Satisfaction" },
            { id: "3", value: "50+ Brands", label: "Vehicle Options" }
          ]}
          buttons={[
            { text: "Browse Inventory", href: "#products" },
            { text: "Schedule Test Drive", href: "#contact" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Why Choose" },
            { type: "text", content: "AutoMax" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#contact" }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardSix
          title="Our Advantage"
          description="What sets us apart from other dealerships"
          tag="Why Us"
          features={[
            {
              id: 1,
              title: "Financing Made Easy",
              description: "Flexible financing options with competitive rates and quick approvals to make ownership affordable for everyone",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054407934-a0q1x5o7.jpg"
            },
            {
              id: 2,
              title: "Extended Warranty",
              description: "Comprehensive warranty coverage and service packages to keep your vehicle running smoothly",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054409483-1nzfffmu.jpg"
            },
            {
              id: 3,
              title: "Transparent Pricing",
              description: "No hidden fees, honest appraisals, and straightforward pricing so you know exactly what you're paying",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054411123-4ypdpef2.jpg"
            },
            {
              id: 4,
              title: "Professional Service",
              description: "Expert technicians and dedicated customer support for maintenance and repairs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054412478-7p06buyn.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Inventory"
          description="Browse our premium selection of quality vehicles"
          tag="New Arrivals"
          products={[
            {
              id: "1",
              name: "2024 Tesla Model S",
              price: "$89,950",
              variant: "Pearl White | Electric",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054407934-a0q1x5o7.jpg",
              imageAlt: "2024 Tesla Model S"
            },
            {
              id: "2",
              name: "2023 BMW X7",
              price: "$79,500",
              variant: "Black | Premium SUV",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054409483-1nzfffmu.jpg",
              imageAlt: "2023 BMW X7"
            },
            {
              id: "3",
              name: "2024 Honda Civic",
              price: "$28,900",
              variant: "Silver | Reliable Sedan",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054411123-4ypdpef2.jpg",
              imageAlt: "2024 Honda Civic"
            },
            {
              id: "4",
              name: "2023 Ford F-150",
              price: "$54,200",
              variant: "Red | Heavy Duty Truck",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054412478-7p06buyn.jpg",
              imageAlt: "2023 Ford F-150"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardSix
          title="Our Track Record"
          description="Proven excellence in automotive sales and customer service"
          tag="Statistics"
          metrics={[
            {
              id: "1",
              value: "25+",
              tag: "Years",
              tagIcon: Award,
              title: "Industry Experience"
            },
            {
              id: "2",
              value: "10K+",
              tag: "Happy",
              tagIcon: Users,
              title: "Customer Base"
            },
            {
              id: "3",
              value: "150+",
              tag: "Brands",
              tagIcon: TrendingUp,
              title: "Vehicle Selection"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real reviews from satisfied buyers"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "John Martinez",
              handle: "@jmartinez",
              testimonial: "Fantastic experience from start to finish. The team was honest, helpful, and found me the perfect car within my budget. Highly recommend AutoMax!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054413570-np01lr18.jpg"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              handle: "@sthompson",
              testimonial: "Best dealership experience I've had. No pressure, transparent pricing, and excellent after-sales service. Already referred my friends!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054414724-9pn8npkc.jpg"
            },
            {
              id: "3",
              name: "Michael Chen",
              handle: "@mchen",
              testimonial: "The financing options they offered were unbeatable. Easy process and I drove home in my dream car the same day!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054415676-lnols1a7.jpg"
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              handle: "@erodriguez",
              testimonial: "Professional staff, clean inventory, and they actually listened to what I needed. This is a dealership that truly cares about its customers.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054416929-ohppbbzr.jpg"
            },
            {
              id: "5",
              name: "David Park",
              handle: "@dpark",
              testimonial: "Got an amazing deal on my trade-in and the new car I wanted. The warranty package is comprehensive. Very satisfied!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054417933-s322hcc9.jpg"
            },
            {
              id: "6",
              name: "Jennifer Walsh",
              handle: "@jwalsh",
              testimonial: "Came in skeptical but left impressed. Every question was answered honestly. This is where I'm buying my next car for sure.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766054419161-x4o69hcy.jpg"
            }
          ]}
          showRating={true}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about purchasing and financing"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "What financing options do you offer?",
              content: "We offer competitive financing through multiple lenders with rates starting as low as 2.9%. We also accept trade-ins and offer lease-to-own options for qualified buyers."
            },
            {
              id: "2",
              title: "Can I get a pre-approval for a loan?",
              content: "Yes! Visit us or apply online for a pre-approval. It typically takes 24-48 hours and gives you a clear budget for your car shopping."
            },
            {
              id: "3",
              title: "Do you offer extended warranties?",
              content: "Absolutely. We offer comprehensive extended warranty packages covering major components up to 100,000 miles with roadside assistance included."
            },
            {
              id: "4",
              title: "How long is the test drive?",
              content: "Take as much time as you need! Most test drives last 30-45 minutes. We encourage you to test the vehicle on various road types to ensure it's right for you."
            },
            {
              id: "5",
              title: "What's your return policy?",
              content: "We offer a 7-day return policy with no questions asked if the vehicle doesn't meet your expectations. The vehicle must have less than 500 additional miles."
            },
            {
              id: "6",
              title: "Do you accept trade-ins?",
              content: "Yes, we accept trade-ins and provide fair market value appraisals. We handle all paperwork and can apply the trade-in value toward your new purchase."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Schedule Your Test Drive"
          ctaDescription="Visit our showroom and find your perfect vehicle. Our team is ready to help you get behind the wheel."
          ctaIcon={Calendar}
          ctaButton={{
            text: "Book Now",
            href: "mailto:sales@automax.com?subject=Test Drive Request"
          }}
          faqs={[
            {
              id: "1",
              title: "What should I bring for a test drive?",
              content: "Bring your valid driver's license, proof of insurance, and any trade-in vehicle title if applicable."
            },
            {
              id: "2",
              title: "How do I schedule a test drive?",
              content: "Call us at 555-AUTO-MAX or fill out the form on this page. We'll confirm your appointment within 2 hours."
            },
            {
              id: "3",
              title: "Is there a charge for the test drive?",
              content: "Absolutely not! Test drives are free and there's no obligation to purchase."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="AutoMax"
          copyrightText="© 2025 AutoMax Dealership. All rights reserved."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/automax",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/automax",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/automax",
              ariaLabel: "Instagram"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/automax",
              ariaLabel: "LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
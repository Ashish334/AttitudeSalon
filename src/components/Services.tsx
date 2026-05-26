import { MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const WHATSAPP = "917045641399";

type ServiceItem = {
  category: string;
  name: string;
  gender: "Male" | "Female" | "Unisex";
  price: string;
  desc: string;
  image: string;
};

// Lightweight WebP images via Unsplash CDN — w=400, q=70, fm=webp
const IMG = {
  // Hair Care
  hairwash_f: "/images/services/haircare/hairwash-f.webp",
  hairwash_m: "/images/services/haircare/hairwash-m.webp",
  powerwash_f: "/images/services/haircare/powerwash-f.webp",
  powerwash_m: "/images/services/haircare/powerwash-m.webp",
  adv_hairwash_f: "/images/services/haircare/advancehairwash-f.webp",
  adv_hairwash_m: "/images/services/haircare/advancehairwash-m.webp",
  // Hair Cut
  haircut_m: "/images/services/haircut/cleenhaircut-m.webp",
  haircut_uv_f: "/images/services/haircut/haircutuv-f.webp",
  adv_haircut_f: "/images/services/haircut/advancehaircut-f.webp",
  adv_haircut_m: "/images/services/haircut/advancehaircut-m.webp",
  // Beard
  clean_shave: "/images/services/beard/cleenshave-m.webp",
  trimming: "/images/services/beard/Trimming-m.webp",
  beard_shape: "/images/services/beard/beard-shape-m.webp",
  mustache_colour: "/images/services/beard/Mustachecolour-m.webp",
  beard_colour: "/images/services/beard/beardcolour-m.webp",
  // Hair Style
  blowdry_f: "/images/services/hairstyle/blowdry-f.webp",
  blowdry_m: "/images/services/hairstyle/blowdry-m.webp",
  tong_f: "/images/services/hairstyle/tong-hair-style-f.webp",
  tong_m: "/images/services/hairstyle/tong-hair-style-m.webp",
  straighten_f: "/images/services/hairstyle/straightening-f.webp",
  straighten_m: "/images/services/hairstyle/straightening-m.webp",
  // Hair Colour
  root_touchup_f: "/images/services/haircolor/root-touchup-f.webp",
  root_touchup_m: "/images/services/haircolor/root-touchup-m.webp",
  funky_f: "/images/services/haircolor/funky-colour-f.webp",
  funky_m: "/images/services/haircolor/funky-colour-m.webp",
  global_colour_f: "/images/services/haircolor/global-colour-f.webp",
  global_colour_m: "/images/services/haircolor/global-colour-m.webp",
  highlights_f: "/images/services/haircolor/highlights-f.webp",
  highlights_m: "/images/services/haircolor/highlights-m.webp",
  // Hair Spa
  oil_massage_f: "/images/services/hairspa/head-oil-massage-f.webp",
  oil_massage_m: "/images/services/hairspa/head-oil-massage-m.webp",
  dandruff_f: "/images/services/hairspa/dandruff-treatments-f.webp",
  dandruff_m: "/images/services/hairspa/dandruff-treatments-m.webp",
  vitamino_f: "/images/services/hairspa/vitamino-colour-spa-f.webp",
  vitamino_m: "/images/services/hairspa/vitamino-colour-spa-m.webp",
  olaplex_f: "/images/services/hairspa/power-olaplex-spa-f.webp",
  olaplex_m: "/images/services/hairspa/power-olaplex-spa-m.webp",
  metaldx: "/images/services/hairspa/metal-dx-with-loreal-f.webp",
  spa_loreal_f: "/images/services/hairspa/regular-spa-loreal-f.webp",
  spa_loreal_m: "/images/services/hairspa/regular-spa-loreal-m.webp",
  spa_schwarz_m: "/images/services/hairspa/regular-schwanzkopf-spa-m.webp",
  spa_schwarz_f: "/images/services/hairspa/regular-schwanzkopf-spa-f.webp",
  abs_repair: "/images/services/hairspa/absolute-repair-molecular-f.webp",
  biotop: "/images/services/hairspa/biotop-911-hair-spa-f.webp",
  // Hair Treatments
  relaxing: "/images/services/hairtreatments/hair-relaxing.webp",
  smoothening: "/images/services/hairtreatments/hair-smoothening.webp",
  rebounding: "/images/services/hairtreatments/hair-rebounding.webp",
  keratin: "/images/services/hairtreatments/hair-keratin.webp",
  botox: "/images/services/hairtreatments/hair-botox.webp",
  nanoplastea: "/images/services/hairtreatments/nano-plastea.webp",
  hair_therapy: "/images/services/hairtreatments/hair-therapy.webp",
  // Threading
  upper_lips_t: "/images/services/threading/upper-lips.webp",
  lower_lips_t: "/images/services/threading/lower-lips.webp",
  chin_t: "/images/services/threading/chin.webp",
  forehead_t: "/images/services/threading/forehead.webp",
  eyebrow_t: "/images/services/threading/eyebrow.webp",
  nose_t: "/images/services/threading/nose.webp",
  sidelocks_t: "/images/services/threading/side-locks.webp",
  fullface_t: "/images/services/threading/full-face.webp",
  // Face Wax
  forehead_fw: "/images/services/facewax/forehead-face-wax.webp",
  upperlips_fw: "/images/services/facewax/upper-lips-wax.webp",
  lowerlips_fw: "/images/services/facewax/lower-lips-wax.webp",
  chin_fw: "/images/services/facewax/Chin-wax.webp",
  nose_fw: "/images/services/facewax/nose-wax.webp",
  sidelocks_fw: "/images/services/facewax/side-locks.webp",
  neck_fw: "/images/services/facewax/neck-wax.webp",
  fullface_fw: "/images/services/facewax/full-face-wax.webp",
  // Body Wax
  underarms_f: "/images/services/bodywax/underarms-f.webp",
  underarms_m: "/images/services/bodywax/underarms-m.webp",
  half_hands_f: "/images/services/bodywax/half-hands-f.webp",
  half_hands_m: "/images/services/bodywax/half-hands-m.webp",
  full_hands_f: "/images/services/bodywax/full-hands-f.webp",
  full_hands_m: "/images/services/bodywax/full-hands-m.webp",
  half_legs_f: "/images/services/bodywax/half-legs-f.webp",
  half_legs_m: "/images/services/bodywax/half-legs-m.webp",
  full_legs_f: "/images/services/bodywax/full-legs-f.webp",
  full_legs_m: "/images/services/bodywax/full-legs-m.webp",
  foot_wax_f: "/images/services/bodywax/foot-wax-f.webp",
  foot_wax_m: "/images/services/bodywax/foot-wax-m.webp",
  front_body_wax_f: "/images/services/bodywax/front-body-wax-f.webp",
  front_body_wax_m: "/images/services/bodywax/front-body-wax-m.webp",
  back_body_wax_f: "/images/services/bodywax/back-body-wax-f.webp",
  back_body_wax_m: "/images/services/bodywax/back-body-wax-m.webp",
  bee_wax: "/images/services/bodywax/bee-wax.webp",
  // Face Bleach
  dtan: "/images/services/facebleach/d-tan-bleach.webp",
  herbal_bleach: "/images/services/facebleach/herbal-bleach.webp",
  vlcc_gold_bleach: "/images/services/facebleach/vlcc-gold-bleach.webp",
  oxy_bleach: "/images/services/facebleach/oxy-bleach.webp",
  adv_bleach: "/images/services/facebleach/adv-bleach.webp",
  neck_bleach: "/images/services/facebleach/neck-bleach.webp",
  hands_bleach_f: "/images/services/facebleach/hands-bleach-f.webp",
  hands_bleach_m: "/images/services/facebleach/hands-bleach-m.webp",
  legs_bleach_f: "/images/services/facebleach/legs-bleach-f.webp",
  legs_bleach_m: "/images/services/facebleach/legs-bleach-m.webp",
  foot_bleach_f: "/images/services/facebleach/foot-bleach-f.webp",
  foot_bleach_m: "/images/services/facebleach/foot-bleach-m.webp",
  front_body_bl_f: "/images/services/facebleach/front-body-bleach-f.webp",
  front_body_bl_m: "/images/services/facebleach/front-body-bleach-m.webp",
  back_body_bl_f: "/images/services/facebleach/back-body-bleach-f.webp",
  back_body_bl_m: "/images/services/facebleach/back-body-bleach-m.webp",
  full_body_bleach: "/images/services/facebleach/full-body-bleach.webp",
  // VLCC Facial
  herbal_facial: "/images/services/vlccfacial/herbal-facial.webp",
  herbal_cleanup: "/images/services/vlccfacial/herbal-cleanup.webp",
  diamond_facial: "/images/services/vlccfacial/diamond-facial.webp",
  diamond_cleanup: "/images/services/vlccfacial/diamond-cleanup.webp",
  gold_facial: "/images/services/vlccfacial/gold-facial.webp",
  gold_cleanup: "/images/services/vlccfacial/gold-cleanup.webp",
  // Lotus Facial
  puravitals: "/images/services/lotusfacial/puravitals-facial.webp",
  hydravitals: "/images/services/lotusfacial/hydravitals-facial.webp",
  preservita: "/images/services/lotusfacial/preservita-facial.webp",
  dtan_whitening: "/images/services/lotusfacial/d-tan-whitening-facial.webp",
  // Raga Facial
  platinum_facial: "/images/services/ragafacial/platinum-facial.webp",
  gold_peel: "/images/services/ragafacial/gold-peel.webp",
  fairness_peel: "/images/services/ragafacial/fairness-peel.webp",
  // Serenita Mask
  pomegranate_mask: "/images/services/serenitamask/pomegranate-mask.webp",
  whitening_peel: "/images/services/serenitamask/whitening-peel.webp",
  charcoal_facial: "/images/services/serenitamask/charcoal-facial.webp",
  // Only Mask
  reg_peel_mask: "/images/services/onlymask/reg-peel-mask.webp",
  pom_mask: "/images/services/onlymask/pom-mask.webp",
  white_peel: "/images/services/onlymask/white-peel.webp",
  charcoal_peel: "/images/services/onlymask/charcoal-peel.webp",
  // Korean Facial
  korean_glow: "/images/services/koreanskin/korean-glow.webp",
  marine_mud: "/images/services/koreanskin/marine-mud.webp",
  hydra_rich: "/images/services/koreanskin/hydra-rich.webp",
  sea_boost: "/images/services/koreanskin/sea-boost.webp",
  purifying_skin: "/images/services/koreanskin/purifying-skin.webp",
  radiant_facial: "/images/services/koreanskin/radiant-facial.webp",
  // Make-Up
  basic_makeup_f: "/images/services/makeup/basic-makeup-f.webp",
  basic_makeup_m: "/images/services/makeup/basic-makeup-m.webp",
  party_makeup_f: "/images/services/makeup/party-makeup-f.webp",
  party_makeup_m: "/images/services/makeup/party-makeup-m.webp",
  bridal_makeup: "/images/services/makeup/bridal-makeup.webp",
  // Nail Care
  nail_cut_mani: "/images/services/nailcare/nail-cut-mani.webp",
  nail_cut_pedi: "/images/services/nailcare/nail-cut-pedi.webp",
  nail_polish_mani: "/images/services/nailcare/nail-polish-mani.webp",
  nail_polish_pedi: "/images/services/nailcare/nail-polish-pedi.webp",
  vlcc_mani: "/images/services/nailcare/vlcc-mani.webp",
  vlcc_pedi: "/images/services/nailcare/vlcc-pedi.webp",
  leg_massage: "/images/services/nailcare/leg-massage.webp",
  raga_aloe_mani: "/images/services/nailcare/raga-aloe-mani.webp",
  raga_aloe_pedi: "/images/services/nailcare/raga-aloe-pedi.webp",
  raga_rose_mani: "/images/services/nailcare/raga-rose-mani.webp",
  raga_rose_pedi: "/images/services/nailcare/raga-rose-pedi.webp",
  raga_choc_mani: "/images/services/nailcare/raga-choc-mani.webp",
  raga_choc_pedi: "/images/services/nailcare/raga-choc-pedi.webp",
  lotus_mani: "/images/services/nailcare/lotus-mani.webp",
  lotus_pedi: "/images/services/nailcare/lotus-pedi.webp",
  heel_peel: "/images/services/nailcare/heel-peel.webp",
  purify_wax_mani: "/images/services/nailcare/purify-wax-mani.webp",
  purify_wax_pedi: "/images/services/nailcare/purify-wax-pedi.webp",
  // Gel Polishing
  perm_gel: "/images/services/gelpolish/permanent-gel-polish.webp",
  temp_ext: "/images/services/gelpolish/temporary-gel-ext.webp",
  polygel: "/images/services/gelpolish/polygel.webp",
  nail_art: "/images/services/gelpolish/nail-art.webp",
  gel_remove: "/images/services/gelpolish/gel-remove.webp",
  acrylic_ext: "/images/services/gelpolish/acrylic-ext.webp",
  korean_soft_ext: "/images/services/gelpolish/korean-soft-ext.webp",
};

const services: ServiceItem[] = [
  // Hair Care
  {
    category: "Hair Care",
    name: "Hair Wash",
    gender: "Female",
    price: "₹350",
    desc: "Basic wash",
    image: IMG.hairwash_f,
  },
  {
    category: "Hair Care",
    name: "Hair Wash",
    gender: "Male",
    price: "₹100",
    desc: "Basic wash",
    image: IMG.hairwash_m,
  },
  {
    category: "Hair Care",
    name: "Power Wash",
    gender: "Female",
    price: "₹500",
    desc: "Deep wash",
    image: IMG.powerwash_f,
  },
  {
    category: "Hair Care",
    name: "Power Wash",
    gender: "Male",
    price: "₹200",
    desc: "Deep wash",
    image: IMG.powerwash_m,
  },
  {
    category: "Hair Care",
    name: "Advance Hair Wash",
    gender: "Female",
    price: "₹900",
    desc: "Advanced care",
    image: IMG.adv_hairwash_f,
  },
  {
    category: "Hair Care",
    name: "Advance Hair Wash",
    gender: "Male",
    price: "₹350",
    desc: "Advanced care",
    image: IMG.adv_hairwash_m,
  },
  // Hair Cut
  {
    category: "Hair Cut",
    name: "Clean Hair Cut",
    gender: "Male",
    price: "₹500",
    desc: "Clean cut",
    image: IMG.haircut_m,
  },
  {
    category: "Hair Cut",
    name: "Hair Cut UV",
    gender: "Female",
    price: "₹400 / ₹500",
    desc: "UV style cut",
    image: IMG.haircut_uv_f,
  },
  {
    category: "Hair Cut",
    name: "Advanced Hair Cut",
    gender: "Female",
    price: "₹600 / ₹800",
    desc: "Premium cut",
    image: IMG.adv_haircut_f,
  },
  {
    category: "Hair Cut",
    name: "Advanced Hair Cut",
    gender: "Male",
    price: "₹200 / ₹250",
    desc: "Premium cut",
    image: IMG.adv_haircut_m,
  },
  // Beard
  {
    category: "Beard",
    name: "Clean Shave",
    gender: "Male",
    price: "₹100",
    desc: "Smooth shave",
    image: IMG.clean_shave,
  },
  {
    category: "Beard",
    name: "Trimming",
    gender: "Male",
    price: "₹100",
    desc: "Beard trim",
    image: IMG.trimming,
  },
  {
    category: "Beard",
    name: "Beard Shape",
    gender: "Male",
    price: "₹150",
    desc: "Shape beard",
    image: IMG.beard_shape,
  },
  {
    category: "Beard",
    name: "Mustache Colour",
    gender: "Male",
    price: "₹100 / ₹150",
    desc: "Color mustache",
    image: IMG.mustache_colour,
  },
  {
    category: "Beard",
    name: "Beard Colour",
    gender: "Male",
    price: "₹450 / ₹500",
    desc: "Beard coloring",
    image: IMG.beard_colour,
  },
  // Hair Style
  {
    category: "Hair Style",
    name: "Blow Dry",
    gender: "Female",
    price: "₹600",
    desc: "Blow dry style",
    image: IMG.blowdry_f,
  },
  {
    category: "Hair Style",
    name: "Blow Dry",
    gender: "Male",
    price: "₹150",
    desc: "Blow dry style",
    image: IMG.blowdry_m,
  },
  {
    category: "Hair Style",
    name: "Tong Hair Style",
    gender: "Female",
    price: "₹800 / ₹1000",
    desc: "Curls style",
    image: IMG.tong_f,
  },
  {
    category: "Hair Style",
    name: "Tong Hair Style",
    gender: "Male",
    price: "₹500",
    desc: "Curls style",
    image: IMG.tong_m,
  },
  {
    category: "Hair Style",
    name: "Straightening",
    gender: "Female",
    price: "₹1000 / ₹1200",
    desc: "Straight hair",
    image: IMG.straighten_f,
  },
  {
    category: "Hair Style",
    name: "Straightening",
    gender: "Male",
    price: "₹800",
    desc: "Straight hair",
    image: IMG.straighten_m,
  },
  // Hair Colour
  {
    category: "Hair Colour",
    name: "Root Touchup",
    gender: "Female",
    price: "₹1200 / ₹1500",
    desc: "Root color",
    image: IMG.root_touchup_f,
  },
  {
    category: "Hair Colour",
    name: "Root Touchup",
    gender: "Male",
    price: "₹700 / ₹800",
    desc: "Root color",
    image: IMG.root_touchup_m,
  },
  {
    category: "Hair Colour",
    name: "Funky Colour",
    gender: "Female",
    price: "₹3000 / ₹5000",
    desc: "Funky color",
    image: IMG.funky_f,
  },
  {
    category: "Hair Colour",
    name: "Funky Colour",
    gender: "Male",
    price: "₹2000",
    desc: "Funky color",
    image: IMG.funky_m,
  },
  {
    category: "Hair Colour",
    name: "Global Colour",
    gender: "Female",
    price: "₹4000 / ₹6000",
    desc: "Full color",
    image: IMG.global_colour_f,
  },
  {
    category: "Hair Colour",
    name: "Global Colour",
    gender: "Male",
    price: "₹1500 / ₹2000",
    desc: "Full color",
    image: IMG.global_colour_m,
  },
  {
    category: "Hair Colour",
    name: "Highlights",
    gender: "Female",
    price: "₹4500 / ₹5000",
    desc: "Highlights",
    image: IMG.highlights_f,
  },
  {
    category: "Hair Colour",
    name: "Highlights",
    gender: "Male",
    price: "₹2000 / ₹2500",
    desc: "Highlights",
    image: IMG.highlights_m,
  },
  // Hair Spa
  {
    category: "Hair Spa",
    name: "Head Oil Massage",
    gender: "Female",
    price: "₹650",
    desc: "Oil massage",
    image: IMG.oil_massage_f,
  },
  {
    category: "Hair Spa",
    name: "Head Oil Massage",
    gender: "Male",
    price: "₹300",
    desc: "Oil massage",
    image: IMG.oil_massage_m,
  },
  {
    category: "Hair Spa",
    name: "Dandruff Treatments",
    gender: "Female",
    price: "₹1500",
    desc: "Dandruff Treatments",
    image: IMG.dandruff_f,
  },
  {
    category: "Hair Spa",
    name: "Dandruff Treatments",
    gender: "Male",
    price: "₹800",
    desc: "Dandruff Treatments",
    image: IMG.dandruff_m,
  },
  {
    category: "Hair Spa",
    name: "Regular Spa Loreal",
    gender: "Female",
    price: "₹1500",
    desc: "Regular Spa Loreal",
    image: IMG.spa_loreal_f,
  },
  {
    category: "Hair Spa",
    name: "Regular Spa Loreal",
    gender: "Male",
    price: "₹600",
    desc: "Regular Spa Loreal",
    image: IMG.spa_loreal_m,
  },
  {
    category: "Hair Spa",
    name: "Regular Schwanzkopf Spa",
    gender: "Female",
    price: "₹1800",
    desc: "Regular Schwanzkopf Spa",
    image: IMG.spa_schwarz_f,
  },
  {
    category: "Hair Spa",
    name: "Regular Schwanzkopf Spa",
    gender: "Male",
    price: "₹700",
    desc: "Regular Schwanzkopf Spa",
    image: IMG.spa_schwarz_m,
  },
  {
    category: "Hair Spa",
    name: "Vitamino Colour Spa",
    gender: "Female",
    price: "₹2000",
    desc: "Vitamino Colour Spa",
    image: IMG.vitamino_f,
  },
  {
    category: "Hair Spa",
    name: "Vitamino Colour Spa",
    gender: "Male",
    price: "₹800",
    desc: "Vitamino Colour Spa",
    image: IMG.vitamino_m,
  },
  {
    category: "Hair Spa",
    name: "Power Olaplex Spa",
    gender: "Female",
    price: "₹3000",
    desc: "Power Olaplex Spa",
    image: IMG.olaplex_f,
  },
  {
    category: "Hair Spa",
    name: "Power Olaplex Spa",
    gender: "Male",
    price: "₹1000",
    desc: "Power Olaplex Spa",
    image: IMG.olaplex_m,
  },
  {
    category: "Hair Spa",
    name: "Metal Dx With Loreal",
    gender: "Female",
    price: "₹3000",
    desc: "Metal Dx With Loreal",
    image: IMG.metaldx,
  },
  {
    category: "Hair Spa",
    name: "Absolute Repair Molecular",
    gender: "Female",
    price: "₹3000",
    desc: "Absolute Repair Molecular",
    image: IMG.abs_repair,
  },
  {
    category: "Hair Spa",
    name: "Biotop 911 Hair Spa",
    gender: "Female",
    price: "₹4000",
    desc: "Biotop 911 Hair Spa",
    image: IMG.biotop,
  },
  // Hair Treatments
  {
    category: "Hair Treatments",
    name: "Hair Relaxing",
    gender: "Female",
    price: "₹4500",
    desc: "Professional hair relaxing treatment for smooth hair",
    image: IMG.relaxing,
  },
  {
    category: "Hair Treatments",
    name: "Hair Smoothening",
    gender: "Female",
    price: "₹5000",
    desc: "Hair smoothening treatment for silky straight hair",
    image: IMG.smoothening,
  },
  {
    category: "Hair Treatments",
    name: "Hair Rebounding",
    gender: "Female",
    price: "₹7000",
    desc: "Permanent hair rebounding treatment",
    image: IMG.rebounding,
  },
  {
    category: "Hair Treatments",
    name: "Hair Keratin",
    gender: "Female",
    price: "₹5000",
    desc: "Keratin treatment for frizz-free shiny hair",
    image: IMG.keratin,
  },
  {
    category: "Hair Treatments",
    name: "Hair Botox",
    gender: "Female",
    price: "₹7000",
    desc: "Hair botox treatment for deep nourishment",
    image: IMG.botox,
  },
  {
    category: "Hair Treatments",
    name: "Nano Plastea",
    gender: "Female",
    price: "₹8000",
    desc: "Advanced nano plastea hair treatment",
    image: IMG.nanoplastea,
  },
  {
    category: "Hair Treatments",
    name: "Hair Therapy",
    gender: "Female",
    price: "₹10000",
    desc: "Complete hair therapy treatment for damaged hair",
    image: IMG.hair_therapy,
  },
  // Threading
  {
    category: "Threading",
    name: "Upper Lips",
    gender: "Female",
    price: "₹50",
    desc: "Smooth upper lips threading",
    image: IMG.upper_lips_t,
  },
  {
    category: "Threading",
    name: "Lower Lips",
    gender: "Female",
    price: "₹50",
    desc: "Lower lips threading service",
    image: IMG.lower_lips_t,
  },
  {
    category: "Threading",
    name: "Chin",
    gender: "Female",
    price: "₹50",
    desc: "Chin threading service",
    image: IMG.chin_t,
  },
  {
    category: "Threading",
    name: "Forehead",
    gender: "Female",
    price: "₹50",
    desc: "Forehead threading service",
    image: IMG.forehead_t,
  },
  {
    category: "Threading",
    name: "Eyebrow",
    gender: "Female",
    price: "₹100",
    desc: "Perfect eyebrow shaping",
    image: IMG.eyebrow_t,
  },
  {
    category: "Threading",
    name: "Nose",
    gender: "Female",
    price: "₹100",
    desc: "Nose threading service",
    image: IMG.nose_t,
  },
  {
    category: "Threading",
    name: "Side Locks",
    gender: "Female",
    price: "₹200",
    desc: "Side locks threading",
    image: IMG.sidelocks_t,
  },
  {
    category: "Threading",
    name: "Full Face",
    gender: "Female",
    price: "₹600",
    desc: "Complete face threading service",
    image: IMG.fullface_t,
  },
  // Face Wax
  {
    category: "Face Wax",
    name: "Forehead",
    gender: "Female",
    price: "₹100",
    desc: "Smooth forehead face wax",
    image: IMG.forehead_fw,
  },
  {
    category: "Face Wax",
    name: "Upper Lips",
    gender: "Female",
    price: "₹100",
    desc: "Upper lips face waxing",
    image: IMG.upperlips_fw,
  },
  {
    category: "Face Wax",
    name: "Lower Lips",
    gender: "Female",
    price: "₹100",
    desc: "Lower lips face waxing",
    image: IMG.lowerlips_fw,
  },
  {
    category: "Face Wax",
    name: "Chin",
    gender: "Female",
    price: "₹100",
    desc: "Chin face waxing service",
    image: IMG.chin_fw,
  },
  {
    category: "Face Wax",
    name: "Nose",
    gender: "Female",
    price: "₹200",
    desc: "Nose face waxing service",
    image: IMG.nose_fw,
  },
  {
    category: "Face Wax",
    name: "Side Locks",
    gender: "Female",
    price: "₹300",
    desc: "Side locks face waxing",
    image: IMG.sidelocks_fw,
  },
  {
    category: "Face Wax",
    name: "Neck",
    gender: "Female",
    price: "₹300",
    desc: "Neck waxing service",
    image: IMG.neck_fw,
  },
  {
    category: "Face Wax",
    name: "Full Face",
    gender: "Female",
    price: "₹1200",
    desc: "Complete full face waxing",
    image: IMG.fullface_fw,
  },
  // Body Wax
  {
    category: "Body Wax",
    name: "Under Arms",
    gender: "Female",
    price: "₹200",
    desc: "Under arms waxing service",
    image: IMG.underarms_f,
  },
  {
    category: "Body Wax",
    name: "Under Arms",
    gender: "Male",
    price: "₹200",
    desc: "Under arms waxing service",
    image: IMG.underarms_m,
  },
  {
    category: "Body Wax",
    name: "Half Hands",
    gender: "Female",
    price: "₹350",
    desc: "Half hands waxing service",
    image: IMG.half_hands_f,
  },
  {
    category: "Body Wax",
    name: "Half Hands",
    gender: "Male",
    price: "₹400",
    desc: "Half hands waxing service",
    image: IMG.half_hands_m,
  },
  {
    category: "Body Wax",
    name: "Full Hands",
    gender: "Female",
    price: "₹500",
    desc: "Full hands waxing service",
    image: IMG.full_hands_f,
  },
  {
    category: "Body Wax",
    name: "Full Hands",
    gender: "Male",
    price: "₹600",
    desc: "Full hands waxing service",
    image: IMG.full_hands_m,
  },
  {
    category: "Body Wax",
    name: "Half Legs",
    gender: "Female",
    price: "₹500",
    desc: "Half legs waxing service",
    image: IMG.half_legs_f,
  },
  {
    category: "Body Wax",
    name: "Half Legs",
    gender: "Male",
    price: "₹600",
    desc: "Half legs waxing service",
    image: IMG.half_legs_m,
  },
  {
    category: "Body Wax",
    name: "Full Legs",
    gender: "Female",
    price: "₹700",
    desc: "Full legs waxing service",
    image: IMG.full_legs_f,
  },
  {
    category: "Body Wax",
    name: "Full Legs",
    gender: "Male",
    price: "₹800",
    desc: "Full legs waxing service",
    image: IMG.full_legs_m,
  },
  {
    category: "Body Wax",
    name: "Foot Wax",
    gender: "Female",
    price: "₹300",
    desc: "Foot waxing service",
    image: IMG.foot_wax_f,
  },
  {
    category: "Body Wax",
    name: "Foot Wax",
    gender: "Male",
    price: "₹300",
    desc: "Foot waxing service",
    image: IMG.foot_wax_m,
  },
  {
    category: "Body Wax",
    name: "Front Body Wax",
    gender: "Female",
    price: "₹600 / ₹400",
    desc: "Front body waxing service",
    image: IMG.front_body_wax_f,
  },
  {
    category: "Body Wax",
    name: "Front Body Wax",
    gender: "Male",
    price: "₹700 / ₹500",
    desc: "Front body waxing service",
    image: IMG.front_body_wax_m,
  },
  {
    category: "Body Wax",
    name: "Back Body Wax",
    gender: "Female",
    price: "₹600 / ₹400",
    desc: "Back body waxing service",
    image: IMG.back_body_wax_f,
  },
  {
    category: "Body Wax",
    name: "Back Body Wax",
    gender: "Male",
    price: "₹700 / ₹500",
    desc: "Back body waxing service",
    image: IMG.back_body_wax_m,
  },
  {
    category: "Body Wax",
    name: "Bee Wax",
    gender: "Female",
    price: "₹1500 / ₹2000",
    desc: "Premium bee wax treatment",
    image: IMG.bee_wax,
  },
  // Face Bleach
  {
    category: "Face Bleach",
    name: "D Tan",
    gender: "Female",
    price: "₹700",
    desc: "D Tan bleach treatment",
    image: IMG.dtan,
  },
  {
    category: "Face Bleach",
    name: "Herbal Bleach",
    gender: "Female",
    price: "₹650",
    desc: "Natural herbal bleach treatment",
    image: IMG.herbal_bleach,
  },
  {
    category: "Face Bleach",
    name: "VLCC Gold Bleach",
    gender: "Female",
    price: "₹850",
    desc: "Premium VLCC gold bleach",
    image: IMG.vlcc_gold_bleach,
  },
  {
    category: "Face Bleach",
    name: "Oxy Bleach",
    gender: "Female",
    price: "₹750",
    desc: "Oxy glow bleach treatment",
    image: IMG.oxy_bleach,
  },
  {
    category: "Face Bleach",
    name: "Ad. Bleach",
    gender: "Female",
    price: "₹1000",
    desc: "Advanced bleach treatment",
    image: IMG.adv_bleach,
  },
  {
    category: "Face Bleach",
    name: "Neck",
    gender: "Female",
    price: "₹500",
    desc: "Neck bleach treatment",
    image: IMG.neck_bleach,
  },
  {
    category: "Face Bleach",
    name: "Hands",
    gender: "Female",
    price: "₹800",
    desc: "Hands bleach treatment",
    image: IMG.hands_bleach_f,
  },
  {
    category: "Face Bleach",
    name: "Hands",
    gender: "Male",
    price: "₹1000",
    desc: "Hands bleach treatment",
    image: IMG.hands_bleach_m,
  },
  {
    category: "Face Bleach",
    name: "Legs",
    gender: "Female",
    price: "₹1000",
    desc: "Legs bleach treatment",
    image: IMG.legs_bleach_f,
  },
  {
    category: "Face Bleach",
    name: "Legs",
    gender: "Male",
    price: "₹1500",
    desc: "Legs bleach treatment",
    image: IMG.legs_bleach_m,
  },
  {
    category: "Face Bleach",
    name: "Foot Bleach",
    gender: "Female",
    price: "₹600",
    desc: "Foot bleach treatment",
    image: IMG.foot_bleach_f,
  },
  {
    category: "Face Bleach",
    name: "Foot Bleach",
    gender: "Male",
    price: "₹700",
    desc: "Foot bleach treatment",
    image: IMG.foot_bleach_m,
  },
  {
    category: "Face Bleach",
    name: "Front Body",
    gender: "Female",
    price: "₹1000",
    desc: "Front body bleach treatment",
    image: IMG.front_body_bl_f,
  },
  {
    category: "Face Bleach",
    name: "Front Body",
    gender: "Male",
    price: "₹1500",
    desc: "Front body bleach treatment",
    image: IMG.front_body_bl_m,
  },
  {
    category: "Face Bleach",
    name: "Back Body",
    gender: "Female",
    price: "₹1000",
    desc: "Back body bleach treatment",
    image: IMG.back_body_bl_f,
  },
  {
    category: "Face Bleach",
    name: "Back Body",
    gender: "Male",
    price: "₹1500",
    desc: "Back body bleach treatment",
    image: IMG.back_body_bl_m,
  },
  {
    category: "Face Bleach",
    name: "Full Body Bleach",
    gender: "Female",
    price: "₹6200",
    desc: "Complete full body bleach treatment",
    image: IMG.full_body_bleach,
  },
  // VLCC Facial
  {
    category: "VLCC Facial",
    name: "Herbal Facial",
    gender: "Female",
    price: "₹1000",
    desc: "Herbal VLCC facial treatment",
    image: IMG.herbal_facial,
  },
  {
    category: "VLCC Facial",
    name: "Herbal Cleanup",
    gender: "Female",
    price: "₹700",
    desc: "Herbal VLCC cleanup treatment",
    image: IMG.herbal_cleanup,
  },
  {
    category: "VLCC Facial",
    name: "Diamond Facial",
    gender: "Female",
    price: "₹1200",
    desc: "Diamond glow facial treatment",
    image: IMG.diamond_facial,
  },
  {
    category: "VLCC Facial",
    name: "Diamond Cleanup",
    gender: "Female",
    price: "₹800",
    desc: "Diamond glow cleanup treatment",
    image: IMG.diamond_cleanup,
  },
  {
    category: "VLCC Facial",
    name: "Gold Facial",
    gender: "Female",
    price: "₹1500",
    desc: "Premium gold facial treatment",
    image: IMG.gold_facial,
  },
  {
    category: "VLCC Facial",
    name: "Gold Cleanup",
    gender: "Female",
    price: "₹900",
    desc: "Premium gold cleanup treatment",
    image: IMG.gold_cleanup,
  },
  // Lotus Facial
  {
    category: "Lotus Facial",
    name: "Puravitals Facial",
    gender: "Female",
    price: "₹1500 / ₹1200",
    desc: "Lotus Puravitals facial treatment for glowing skin",
    image: IMG.puravitals,
  },
  {
    category: "Lotus Facial",
    name: "Hydravitals Facial",
    gender: "Female",
    price: "₹1500 / ₹1200",
    desc: "Hydrating Lotus facial treatment",
    image: IMG.hydravitals,
  },
  {
    category: "Lotus Facial",
    name: "Preservita Facial",
    gender: "Female",
    price: "₹3000",
    desc: "Premium anti-aging Preservita facial",
    image: IMG.preservita,
  },
  {
    category: "Lotus Facial",
    name: "D Tan Whitening Facial",
    gender: "Female",
    price: "₹3000",
    desc: "Skin brightening D Tan whitening facial",
    image: IMG.dtan_whitening,
  },
  // Raga Facial
  {
    category: "Raga Facial",
    name: "Platinum Facial with Peel of Mask",
    gender: "Female",
    price: "₹3200",
    desc: "Premium platinum facial with peel-off mask treatment",
    image: IMG.platinum_facial,
  },
  {
    category: "Raga Facial",
    name: "Gold Facial with Peel of Mask",
    gender: "Female",
    price: "₹3200",
    desc: "Luxury gold facial with peel-off mask",
    image: IMG.gold_peel,
  },
  {
    category: "Raga Facial",
    name: "Fairness with Peel of Mask",
    gender: "Female",
    price: "₹3200",
    desc: "Skin fairness facial with peel-off mask",
    image: IMG.fairness_peel,
  },
  // Serenita Mask
  {
    category: "Serenita Mask",
    name: "Pomegranate Facial with Mask",
    gender: "Female",
    price: "₹3500 / ₹1800",
    desc: "Pomegranate facial treatment with rejuvenating mask",
    image: IMG.pomegranate_mask,
  },
  {
    category: "Serenita Mask",
    name: "Whitening Peel off Facial with Mask",
    gender: "Female",
    price: "₹3500 / ₹1800",
    desc: "Skin whitening peel-off facial with mask treatment",
    image: IMG.whitening_peel,
  },
  {
    category: "Serenita Mask",
    name: "Charcol Facial with Peel of Mask",
    gender: "Female",
    price: "₹3500 / ₹2000",
    desc: "Deep cleansing charcoal facial with peel-off mask",
    image: IMG.charcoal_facial,
  },
  // Only Mask
  {
    category: "Only Mask (15 min)",
    name: "Regular Peel of Mask",
    gender: "Female",
    price: "₹800",
    desc: "Regular peel-off mask treatment for instant freshness",
    image: IMG.reg_peel_mask,
  },
  {
    category: "Only Mask (15 min)",
    name: "Pomegranate Mask",
    gender: "Female",
    price: "₹1000",
    desc: "Refreshing pomegranate mask treatment",
    image: IMG.pom_mask,
  },
  {
    category: "Only Mask (15 min)",
    name: "White Peel Of Mask",
    gender: "Female",
    price: "₹1200",
    desc: "Skin brightening white peel-off mask",
    image: IMG.white_peel,
  },
  {
    category: "Only Mask (15 min)",
    name: "Charcol Peel Of Mask",
    gender: "Female",
    price: "₹1500",
    desc: "Deep cleansing charcoal peel-off mask",
    image: IMG.charcoal_peel,
  },
  // Korean Facial
  {
    category: "Korean Facial",
    name: "Korean Glow Facial",
    gender: "Female",
    price: "₹4500",
    desc: "Premium Korean glow facial for radiant skin",
    image: IMG.korean_glow,
  },
  {
    category: "Korean Facial",
    name: "Marine Mud Facial",
    gender: "Female",
    price: "₹4000",
    desc: "Marine mud facial for deep skin detox",
    image: IMG.marine_mud,
  },
  {
    category: "Korean Facial",
    name: "Hydra Rich Facial",
    gender: "Female",
    price: "₹4000",
    desc: "Hydrating facial for soft and glowing skin",
    image: IMG.hydra_rich,
  },
  {
    category: "Korean Facial",
    name: "Sea Boost Facial",
    gender: "Female",
    price: "₹4500",
    desc: "Sea mineral facial treatment for skin nourishment",
    image: IMG.sea_boost,
  },
  {
    category: "Korean Facial",
    name: "Purifying Skin Treatment",
    gender: "Female",
    price: "Price on Consultation",
    desc: "Advanced purifying skin treatment",
    image: IMG.purifying_skin,
  },
  {
    category: "Korean Facial",
    name: "Radiant Facial",
    gender: "Female",
    price: "Price on Consultation",
    desc: "Radiant facial treatment for glowing skin",
    image: IMG.radiant_facial,
  },
  // Make-Up
  {
    category: "Make-Up",
    name: "Basic Make-Up",
    gender: "Female",
    price: "₹2500",
    desc: "Professional basic makeup for all occasions",
    image: IMG.basic_makeup_f,
  },
  {
    category: "Make-Up",
    name: "Basic Make-Up",
    gender: "Male",
    price: "₹1500",
    desc: "Professional grooming and basic makeup",
    image: IMG.basic_makeup_m,
  },
  {
    category: "Make-Up",
    name: "Party Makeup",
    gender: "Female",
    price: "₹3000",
    desc: "Stylish party makeup for special events",
    image: IMG.party_makeup_f,
  },
  {
    category: "Make-Up",
    name: "Party Makeup",
    gender: "Male",
    price: "₹2500",
    desc: "Party grooming and makeup look",
    image: IMG.party_makeup_m,
  },
  {
    category: "Make-Up",
    name: "Bridal Makeup",
    gender: "Female",
    price: "₹15000",
    desc: "Complete bridal makeup package for weddings",
    image: IMG.bridal_makeup,
  },
  // Nail Care
  {
    category: "Nail Care",
    name: "Manicure Cutting and Filing",
    gender: "Female",
    price: "Manicure ₹150",
    desc: "Professional nail cutting and filing manicure service",
    image: IMG.nail_cut_mani,
  },
  {
    category: "Nail Care",
    name: "Pedicure Cutting and Filing",
    gender: "Female",
    price: "Pedicure ₹150",
    desc: "Professional nail cutting and filing pedicure service",
    image: IMG.nail_cut_pedi,
  },
  {
    category: "Nail Care",
    name: "Nail Polish Manicure",
    gender: "Female",
    price: "Manicure ₹100",
    desc: "Stylish nail polish application manicure service",
    image: IMG.nail_polish_mani,
  },
  {
    category: "Nail Care",
    name: "Nail Polish Pedicure",
    gender: "Female",
    price: "Pedicure ₹100",
    desc: "Stylish nail polish application pedicure service",
    image: IMG.nail_polish_pedi,
  },
  {
    category: "Nail Care",
    name: "VLCC Regular Manicure",
    gender: "Female",
    price: "Manicure ₹600",
    desc: "VLCC regular manicure treatment",
    image: IMG.vlcc_mani,
  },
  {
    category: "Nail Care",
    name: "VLCC Regular Pedicure",
    gender: "Female",
    price: "Pedicure ₹700",
    desc: "VLCC regular pedicure treatment",
    image: IMG.vlcc_pedi,
  },
  {
    category: "Nail Care",
    name: "Leg Massage Pedicure",
    gender: "Female",
    price: "Pedicure ₹750",
    desc: "Relaxing leg massage pedicure service",
    image: IMG.leg_massage,
  },
  {
    category: "Nail Care",
    name: "Raga Aloevera Manicure",
    gender: "Female",
    price: "Manicure ₹1200",
    desc: "Raga Aloevera manicure treatment",
    image: IMG.raga_aloe_mani,
  },
  {
    category: "Nail Care",
    name: "Raga Aloevera Pedicure",
    gender: "Female",
    price: "Pedicure ₹1500",
    desc: "Raga Aloevera pedicure treatment",
    image: IMG.raga_aloe_pedi,
  },
  {
    category: "Nail Care",
    name: "Raga Rose Manicure",
    gender: "Female",
    price: "Manicure ₹1200",
    desc: "Raga Rose manicure treatment",
    image: IMG.raga_rose_mani,
  },
  {
    category: "Nail Care",
    name: "Raga Rose Pedicure",
    gender: "Female",
    price: "Pedicure ₹1500",
    desc: "Raga Rose pedicure treatment",
    image: IMG.raga_rose_pedi,
  },
  {
    category: "Nail Care",
    name: "Raga Chocolate Manicure",
    gender: "Female",
    price: "Manicure ₹1200",
    desc: "Raga Chocolate manicure treatment",
    image: IMG.raga_choc_mani,
  },
  {
    category: "Nail Care",
    name: "Raga Chocolate Pedicure",
    gender: "Female",
    price: "Pedicure ₹1500",
    desc: "Raga Chocolate pedicure treatment",
    image: IMG.raga_choc_pedi,
  },
  {
    category: "Nail Care",
    name: "Lotus Citrus Manicure",
    gender: "Female",
    price: "Manicure ₹1500",
    desc: "Lotus Citrus manicure treatment",
    image: IMG.lotus_mani,
  },
  {
    category: "Nail Care",
    name: "Lotus Citrus Pedicure",
    gender: "Female",
    price: "Pedicure ₹2000",
    desc: "Lotus Citrus pedicure treatment",
    image: IMG.lotus_pedi,
  },
  {
    category: "Nail Care",
    name: "Heel Peel Treatments Pedicure",
    gender: "Female",
    price: "Pedicure ₹1600",
    desc: "Heel peel pedicure treatment for soft feet",
    image: IMG.heel_peel,
  },
  {
    category: "Nail Care",
    name: "Purifying Wax Hand/Foot Manicure",
    gender: "Female",
    price: "Manicure ₹300",
    desc: "Purifying wax hand treatment",
    image: IMG.purify_wax_mani,
  },
  {
    category: "Nail Care",
    name: "Purifying Wax Hand/Foot Pedicure",
    gender: "Female",
    price: "Pedicure ₹500",
    desc: "Purifying wax foot treatment",
    image: IMG.purify_wax_pedi,
  },
  // Gel Polishing
  {
    category: "Gel Polishing",
    name: "Permanent Gel Polishing",
    gender: "Female",
    price: "₹500 / ₹400",
    desc: "Long-lasting permanent gel nail polishing",
    image: IMG.perm_gel,
  },
  {
    category: "Gel Polishing",
    name: "Temporary Extensions",
    gender: "Female",
    price: "₹500 / ₹500",
    desc: "Temporary nail extension service",
    image: IMG.temp_ext,
  },
  {
    category: "Gel Polishing",
    name: "Polygel Extensions",
    gender: "Female",
    price: "₹600 / ₹600",
    desc: "Professional polygel nail extensions",
    image: IMG.polygel,
  },
  {
    category: "Gel Polishing",
    name: "Any Design Art",
    gender: "Female",
    price: "₹600 / ₹600",
    desc: "Creative nail art and custom designs",
    image: IMG.nail_art,
  },
  {
    category: "Gel Polishing",
    name: "All Types Gel Remove",
    gender: "Female",
    price: "₹700 / ₹400",
    desc: "Safe removal of all gel nail polish types",
    image: IMG.gel_remove,
  },
  {
    category: "Gel Polishing",
    name: "Acrylic Extensions",
    gender: "Female",
    price: "₹999 / ₹999",
    desc: "Premium acrylic nail extensions",
    image: IMG.acrylic_ext,
  },
  {
    category: "Gel Polishing",
    name: "Korean Soft Extensions",
    gender: "Female",
    price: "₹1300 / ₹1300",
    desc: "Luxury Korean soft nail extensions",
    image: IMG.korean_soft_ext,
  },
];

function whatsappLink(item: ServiceItem) {
  const imageUrl = `https://attitudeunisexsalon.com${item.image}`;

  const msg = encodeURIComponent(
    `✨ Welcome to Attitude Unisex Salon ✨

Thank you for your interest in our premium salon services.

━━━━━━━━━━━━━━━

💇 SERVICE NAME
${item.name}

📂 CATEGORY
${item.category}

👤 SUITABLE FOR
${item.gender}

💰 STARTING PRICE
${item.price}

📝 SERVICE DETAILS
${item.desc}

🖼️ SERVICE IMAGE
${imageUrl}

━━━━━━━━━━━━━━━

📍 Attitude Unisex Salon
Kandivali (W), Mumbai

📞 Contact: +91 70456 41399

We look forward to serving you with style, care & perfection ❤️`,
  );

  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

const genderColors: Record<string, string> = {
  Female: "bg-pink-100 text-pink-700",
  Male: "bg-blue-100 text-blue-700",
  Unisex: "bg-purple-100 text-purple-700",
};

function CategorySection({
  category,
  items,
  open,
  onToggle,
}: {
  category: string;
  items: ServiceItem[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-4 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold text-sm shrink-0">
            {items.length}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
            <p className="text-sm text-gray-400">
              {items.length} service{items.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 px-6 pt-4 pb-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={item.image}
                  className="h-40 w-full object-cover"
                  alt={item.name}
                />
                <div className="p-5">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800 leading-tight">
                      {item.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full shrink-0 font-medium ${genderColors[item.gender] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {item.gender}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                  <div className="text-amber-600 font-bold text-base mb-3">
                    {item.price}
                  </div>
                  <a
                    href={whatsappLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-sm font-medium transition-colors duration-200"
                  >
                    <MessageCircle size={14} />
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const grouped = services.reduce(
    (acc: Record<string, ServiceItem[]>, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {},
  );

  const categories = Object.keys(grouped);

  // Single source of truth: a Set of open category names
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const allExpanded = openCategories.size === categories.length;

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  const toggleAll = () => {
    if (allExpanded) {
      // Collapse all — clear everything, no exceptions
      setOpenCategories(new Set());
    } else {
      setOpenCategories(new Set(categories));
    }
  };

  return (
    <section id="services" className="py-24 bg-salon-cream">
      <div className="text-center mb-16">
        <p className="section-subtitle">What We Offer</p>
        <h2 className="section-title">Our Premium Services</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3">
          From everyday grooming to special occasions — we have the perfect
          service for every need.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleAll}
            className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1 transition-colors"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${allExpanded ? "rotate-180" : ""}`}
            />
            {allExpanded ? "Collapse all" : "Expand all"}
          </button>
        </div>

        {categories.map((cat) => (
          <CategorySection
            key={cat}
            category={cat}
            items={grouped[cat]}
            open={openCategories.has(cat)}
            onToggle={() => toggleCategory(cat)}
          />
        ))}
      </div>
    </section>
  );
}

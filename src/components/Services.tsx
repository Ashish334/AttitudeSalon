import { MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const WHATSAPP = "919999999999";

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
  hairwash_f:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70&fm=webp&fit=crop",
  hairwash_m:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=70&fm=webp&fit=crop",
  powerwash_f:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70&fm=webp&fit=crop",
  powerwash_m:
    "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=400&q=70&fm=webp&fit=crop",
  adv_hairwash_f:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=70&fm=webp&fit=crop",
  adv_hairwash_m:
    "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=400&q=70&fm=webp&fit=crop",
  // Hair Cut
  haircut_m:
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=70&fm=webp&fit=crop",
  haircut_uv_f:
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=70&fm=webp&fit=crop",
  adv_haircut_f:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=70&fm=webp&fit=crop",
  adv_haircut_m:
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=70&fm=webp&fit=crop",
  // Beard
  clean_shave:
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=70&fm=webp&fit=crop",
  trimming:
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=70&fm=webp&fit=crop",
  beard_shape:
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=70&fm=webp&fit=crop",
  mustache_colour:
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&q=70&fm=webp&fit=crop",
  beard_colour:
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=400&q=70&fm=webp&fit=crop",
  // Hair Style
  blowdry_f:
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&q=70&fm=webp&fit=crop",
  blowdry_m:
    "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=70&fm=webp&fit=crop",
  tong_f:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=70&fm=webp&fit=crop",
  tong_m:
    "https://images.unsplash.com/photo-1582893561942-d61cebd0dcf2?w=400&q=70&fm=webp&fit=crop",
  straighten_f:
    "https://images.unsplash.com/photo-1527799820374-87fbb8a7e4e0?w=400&q=70&fm=webp&fit=crop",
  straighten_m:
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&q=70&fm=webp&fit=crop",
  // Hair Colour
  root_touchup_f:
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=70&fm=webp&fit=crop",
  root_touchup_m:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70&fm=webp&fit=crop",
  funky_f:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=70&fm=webp&fit=crop",
  funky_m:
    "https://images.unsplash.com/photo-1582893561942-d61cebd0dcf2?w=400&q=70&fm=webp&fit=crop",
  global_colour_f:
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70&fm=webp&fit=crop",
  global_colour_m:
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=70&fm=webp&fit=crop",
  highlights_f:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70&fm=webp&fit=crop",
  highlights_m:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=70&fm=webp&fit=crop",
  // Hair Spa
  oil_massage_f:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=70&fm=webp&fit=crop",
  oil_massage_m:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=70&fm=webp&fit=crop",
  dandruff_f:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=70&fm=webp&fit=crop",
  dandruff_m:
    "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=400&q=70&fm=webp&fit=crop",
  spa_loreal_f:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70&fm=webp&fit=crop",
  spa_loreal_m:
    "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=400&q=70&fm=webp&fit=crop",
  spa_schwarz_f:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=70&fm=webp&fit=crop",
  spa_schwarz_m:
    "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=400&q=70&fm=webp&fit=crop",
  vitamino_f:
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70&fm=webp&fit=crop",
  vitamino_m:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=70&fm=webp&fit=crop",
  olaplex_f:
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=70&fm=webp&fit=crop",
  olaplex_m:
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=400&q=70&fm=webp&fit=crop",
  metaldx:
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=70&fm=webp&fit=crop",
  abs_repair:
    "https://images.unsplash.com/photo-1527799820374-87fbb8a7e4e0?w=400&q=70&fm=webp&fit=crop",
  biotop:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=70&fm=webp&fit=crop",
  // Hair Treatments
  relaxing:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70&fm=webp&fit=crop",
  smoothening:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=70&fm=webp&fit=crop",
  rebounding:
    "https://images.unsplash.com/photo-1527799820374-87fbb8a7e4e0?w=400&q=70&fm=webp&fit=crop",
  keratin:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70&fm=webp&fit=crop",
  botox:
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70&fm=webp&fit=crop",
  nanoplastea:
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=70&fm=webp&fit=crop",
  hair_therapy:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=70&fm=webp&fit=crop",
  // Threading
  upper_lips_t:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70&fm=webp&fit=crop",
  lower_lips_t:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=70&fm=webp&fit=crop",
  chin_t:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  forehead_t:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70&fm=webp&fit=crop",
  eyebrow_t:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=70&fm=webp&fit=crop",
  nose_t:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70&fm=webp&fit=crop",
  sidelocks_t:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  fullface_t:
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=70&fm=webp&fit=crop",
  // Face Wax
  forehead_fw:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70&fm=webp&fit=crop",
  upperlips_fw:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70&fm=webp&fit=crop",
  lowerlips_fw:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=70&fm=webp&fit=crop",
  chin_fw:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  nose_fw:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  sidelocks_fw:
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=70&fm=webp&fit=crop",
  neck_fw:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70&fm=webp&fit=crop",
  fullface_fw:
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=70&fm=webp&fit=crop",
  // Body Wax
  underarms:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=70&fm=webp&fit=crop",
  half_hands:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  full_hands:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70&fm=webp&fit=crop",
  half_legs:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  full_legs:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  foot_wax:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=70&fm=webp&fit=crop",
  front_body_wax:
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70&fm=webp&fit=crop",
  back_body_wax:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=70&fm=webp&fit=crop",
  bee_wax:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  // Face Bleach
  dtan: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=70&fm=webp&fit=crop",
  herbal_bleach:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  vlcc_gold_bleach:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70&fm=webp&fit=crop",
  oxy_bleach:
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=70&fm=webp&fit=crop",
  adv_bleach:
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=70&fm=webp&fit=crop",
  neck_bleach:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=70&fm=webp&fit=crop",
  hands_bleach_f:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  hands_bleach_m:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=70&fm=webp&fit=crop",
  legs_bleach_f:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  legs_bleach_m:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  foot_bleach_f:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=70&fm=webp&fit=crop",
  foot_bleach_m:
    "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=400&q=70&fm=webp&fit=crop",
  front_body_bl_f:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  front_body_bl_m:
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70&fm=webp&fit=crop",
  back_body_bl_f:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=70&fm=webp&fit=crop",
  back_body_bl_m:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=70&fm=webp&fit=crop",
  full_body_bleach:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70&fm=webp&fit=crop",
  // VLCC Facial
  herbal_facial:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=70&fm=webp&fit=crop",
  herbal_cleanup:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=70&fm=webp&fit=crop",
  diamond_facial:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  diamond_cleanup:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=70&fm=webp&fit=crop",
  gold_facial:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  gold_cleanup:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70&fm=webp&fit=crop",
  // Lotus Facial
  puravitals:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=70&fm=webp&fit=crop",
  hydravitals:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=70&fm=webp&fit=crop",
  preservita:
    "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&q=70&fm=webp&fit=crop",
  dtan_whitening:
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=70&fm=webp&fit=crop",
  // Raga Facial
  platinum_facial:
    "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&q=70&fm=webp&fit=crop",
  gold_peel:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=70&fm=webp&fit=crop",
  fairness_peel:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  // Serenita Mask
  pomegranate_mask:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  whitening_peel:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=70&fm=webp&fit=crop",
  charcoal_facial:
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=70&fm=webp&fit=crop",
  // Only Mask
  reg_peel_mask:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=70&fm=webp&fit=crop",
  pom_mask:
    "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&q=70&fm=webp&fit=crop",
  white_peel:
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=70&fm=webp&fit=crop",
  charcoal_peel:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=70&fm=webp&fit=crop",
  // Korean Facial
  korean_glow:
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=70&fm=webp&fit=crop",
  marine_mud:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70&fm=webp&fit=crop",
  hydra_rich:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=70&fm=webp&fit=crop",
  sea_boost:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=70&fm=webp&fit=crop",
  purifying_skin:
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=70&fm=webp&fit=crop",
  radiant_facial:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  // Make-Up
  basic_makeup_f:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=70&fm=webp&fit=crop",
  basic_makeup_m:
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=70&fm=webp&fit=crop",
  party_makeup_f:
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=70&fm=webp&fit=crop",
  party_makeup_m:
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=400&q=70&fm=webp&fit=crop",
  bridal_makeup:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=70&fm=webp&fit=crop",
  // Nail Care
  nail_cut_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  nail_cut_pedi:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  nail_polish_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  nail_polish_pedi:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  vlcc_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  vlcc_pedi:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  leg_massage:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=70&fm=webp&fit=crop",
  raga_aloe_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  raga_aloe_pedi:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  raga_rose_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  raga_rose_pedi:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  raga_choc_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  raga_choc_pedi:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  lotus_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  lotus_pedi:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  heel_peel:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  purify_wax_mani:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  purify_wax_pedi:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  // Gel Polishing
  perm_gel:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  temp_ext:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  polygel:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  nail_art:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
  gel_remove:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=70&fm=webp&fit=crop",
  acrylic_ext:
    "https://images.unsplash.com/photo-1535695291162-5e0ee0d7f8a9?w=400&q=70&fm=webp&fit=crop",
  korean_soft_ext:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=70&fm=webp&fit=crop",
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
    image: IMG.underarms,
  },
  {
    category: "Body Wax",
    name: "Under Arms",
    gender: "Male",
    price: "₹200",
    desc: "Under arms waxing service",
    image: IMG.underarms,
  },
  {
    category: "Body Wax",
    name: "Half Hands",
    gender: "Female",
    price: "₹350",
    desc: "Half hands waxing service",
    image: IMG.half_hands,
  },
  {
    category: "Body Wax",
    name: "Half Hands",
    gender: "Male",
    price: "₹400",
    desc: "Half hands waxing service",
    image: IMG.half_hands,
  },
  {
    category: "Body Wax",
    name: "Full Hands",
    gender: "Female",
    price: "₹500",
    desc: "Full hands waxing service",
    image: IMG.full_hands,
  },
  {
    category: "Body Wax",
    name: "Full Hands",
    gender: "Male",
    price: "₹600",
    desc: "Full hands waxing service",
    image: IMG.full_hands,
  },
  {
    category: "Body Wax",
    name: "Half Legs",
    gender: "Female",
    price: "₹500",
    desc: "Half legs waxing service",
    image: IMG.half_legs,
  },
  {
    category: "Body Wax",
    name: "Half Legs",
    gender: "Male",
    price: "₹600",
    desc: "Half legs waxing service",
    image: IMG.half_legs,
  },
  {
    category: "Body Wax",
    name: "Full Legs",
    gender: "Female",
    price: "₹700",
    desc: "Full legs waxing service",
    image: IMG.full_legs,
  },
  {
    category: "Body Wax",
    name: "Full Legs",
    gender: "Male",
    price: "₹800",
    desc: "Full legs waxing service",
    image: IMG.full_legs,
  },
  {
    category: "Body Wax",
    name: "Foot Wax",
    gender: "Female",
    price: "₹300",
    desc: "Foot waxing service",
    image: IMG.foot_wax,
  },
  {
    category: "Body Wax",
    name: "Foot Wax",
    gender: "Male",
    price: "₹300",
    desc: "Foot waxing service",
    image: IMG.foot_wax,
  },
  {
    category: "Body Wax",
    name: "Front Body Wax",
    gender: "Female",
    price: "₹600 / ₹400",
    desc: "Front body waxing service",
    image: IMG.front_body_wax,
  },
  {
    category: "Body Wax",
    name: "Front Body Wax",
    gender: "Male",
    price: "₹700 / ₹500",
    desc: "Front body waxing service",
    image: IMG.front_body_wax,
  },
  {
    category: "Body Wax",
    name: "Back Body Wax",
    gender: "Female",
    price: "₹600 / ₹400",
    desc: "Back body waxing service",
    image: IMG.back_body_wax,
  },
  {
    category: "Body Wax",
    name: "Back Body Wax",
    gender: "Male",
    price: "₹700 / ₹500",
    desc: "Back body waxing service",
    image: IMG.back_body_wax,
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
    name: "Cutting and Filing",
    gender: "Female",
    price: "Manicure ₹150",
    desc: "Professional nail cutting and filing manicure service",
    image: IMG.nail_cut_mani,
  },
  {
    category: "Nail Care",
    name: "Cutting and Filing",
    gender: "Female",
    price: "Pedicure ₹150",
    desc: "Professional nail cutting and filing pedicure service",
    image: IMG.nail_cut_pedi,
  },
  {
    category: "Nail Care",
    name: "Nail Polish Application",
    gender: "Female",
    price: "Manicure ₹100",
    desc: "Stylish nail polish application manicure service",
    image: IMG.nail_polish_mani,
  },
  {
    category: "Nail Care",
    name: "Nail Polish Application",
    gender: "Female",
    price: "Pedicure ₹100",
    desc: "Stylish nail polish application pedicure service",
    image: IMG.nail_polish_pedi,
  },
  {
    category: "Nail Care",
    name: "VLCC Regular",
    gender: "Female",
    price: "Manicure ₹600",
    desc: "VLCC regular manicure treatment",
    image: IMG.vlcc_mani,
  },
  {
    category: "Nail Care",
    name: "VLCC Regular",
    gender: "Female",
    price: "Pedicure ₹700",
    desc: "VLCC regular pedicure treatment",
    image: IMG.vlcc_pedi,
  },
  {
    category: "Nail Care",
    name: "Leg Massage",
    gender: "Female",
    price: "Pedicure ₹750",
    desc: "Relaxing leg massage pedicure service",
    image: IMG.leg_massage,
  },
  {
    category: "Nail Care",
    name: "Raga Aloevera",
    gender: "Female",
    price: "Manicure ₹1200",
    desc: "Raga Aloevera manicure treatment",
    image: IMG.raga_aloe_mani,
  },
  {
    category: "Nail Care",
    name: "Raga Aloevera",
    gender: "Female",
    price: "Pedicure ₹1500",
    desc: "Raga Aloevera pedicure treatment",
    image: IMG.raga_aloe_pedi,
  },
  {
    category: "Nail Care",
    name: "Raga Rose",
    gender: "Female",
    price: "Manicure ₹1200",
    desc: "Raga Rose manicure treatment",
    image: IMG.raga_rose_mani,
  },
  {
    category: "Nail Care",
    name: "Raga Rose",
    gender: "Female",
    price: "Pedicure ₹1500",
    desc: "Raga Rose pedicure treatment",
    image: IMG.raga_rose_pedi,
  },
  {
    category: "Nail Care",
    name: "Raga Chocolate",
    gender: "Female",
    price: "Manicure ₹1200",
    desc: "Raga Chocolate manicure treatment",
    image: IMG.raga_choc_mani,
  },
  {
    category: "Nail Care",
    name: "Raga Chocolate",
    gender: "Female",
    price: "Pedicure ₹1500",
    desc: "Raga Chocolate pedicure treatment",
    image: IMG.raga_choc_pedi,
  },
  {
    category: "Nail Care",
    name: "Lotus Citrus",
    gender: "Female",
    price: "Manicure ₹1500",
    desc: "Lotus Citrus manicure treatment",
    image: IMG.lotus_mani,
  },
  {
    category: "Nail Care",
    name: "Lotus Citrus",
    gender: "Female",
    price: "Pedicure ₹2000",
    desc: "Lotus Citrus pedicure treatment",
    image: IMG.lotus_pedi,
  },
  {
    category: "Nail Care",
    name: "Heel Peel Treatments",
    gender: "Female",
    price: "Pedicure ₹1600",
    desc: "Heel peel pedicure treatment for soft feet",
    image: IMG.heel_peel,
  },
  {
    category: "Nail Care",
    name: "Purifying Wax Hand/Foot",
    gender: "Female",
    price: "Manicure ₹300",
    desc: "Purifying wax hand treatment",
    image: IMG.purify_wax_mani,
  },
  {
    category: "Nail Care",
    name: "Purifying Wax Hand/Foot",
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
  const msg = encodeURIComponent(
    `Hi, I want to book:\nService: ${item.name}\nCategory: ${item.category}\nGender: ${item.gender}\nPrice: ${item.price}`,
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

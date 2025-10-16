import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  partnershipTemplateId: import.meta.env.VITE_EMAILJS_PARTNERSHIP_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Initialiser EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Service pour envoyer un email de contact général
export const sendContactEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    return {
      data: { status: 'success' },
      message: 'Email envoyé avec succès'
    };
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    throw new Error('Erreur lors de l\'envoi de l\'email');
  }
};

// Service pour envoyer un email de partenariat
export const sendPartnershipEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.partnershipTemplateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    return {
      data: { status: 'success' },
      message: 'Email de partenariat envoyé avec succès'
    };
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    throw new Error('Erreur lors de l\'envoi de l\'email de partenariat');
  }
};

// Vérifier la configuration EmailJS
export const isEmailConfigured = () => {
  return !!(
    EMAILJS_CONFIG.serviceId && 
    EMAILJS_CONFIG.templateId && 
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.serviceId !== 'your_service_id_here'
  );
};
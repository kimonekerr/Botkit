import { AITool } from '../../types';
import { contentCreationTools } from './tools/contentCreation';
import { seoMarketingTools } from './tools/seoMarketing';
import { socialMediaTools } from './tools/socialMedia';
import { designGraphicsTools } from './tools/designGraphics';
import { videoAudioTools } from './tools/videoAudio';
import { chatbotTools } from './tools/chatbots';
import { emailAutomationTools } from './tools/emailAutomation';
import { crmTools } from './tools/crm';
import { ecommerceTools } from './tools/ecommerce';
import { dataAnalyticsTools } from './tools/dataAnalytics';
import { hrRecruitmentTools } from './tools/hrRecruitment';
import { salesLeadsTools } from './tools/salesLeads';
import { financialTools } from './tools/financial';
import { productivityTools } from './tools/productivity';
import { legalTools } from './tools/legal';

export const toolsByCategory: Record<string, AITool[]> = {
  'content-creation': contentCreationTools,
  'seo-marketing': seoMarketingTools,
  'social-media': socialMediaTools,
  'design-graphics': designGraphicsTools,
  'video-audio': videoAudioTools,
  'chatbots': chatbotTools,
  'email-automation': emailAutomationTools,
  'crm': crmTools,
  'ecommerce': ecommerceTools,
  'data-analytics': dataAnalyticsTools,
  'hr-recruitment': hrRecruitmentTools,
  'sales-leads': salesLeadsTools,
  'financial': financialTools,
  'productivity': productivityTools,
  'legal': legalTools
};
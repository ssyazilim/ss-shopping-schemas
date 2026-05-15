import { registry } from '../registry';
import { CONTACT_ME, CONTACT_ME_ERROR, CONTACT_ME_RESUME, FILE, CHECK_SMTP } from './validation';

export const ContactMeSchema = registry.register('ContactMe', CONTACT_ME());

export const ContactMeErrorSchema = registry.register('ContactMeError', CONTACT_ME_ERROR());

export const ContactMeResumeSchema = registry.register('ContactMeResume', CONTACT_ME_RESUME());

export const FileSchema = registry.register('File', FILE);

export const CheckSMTPSchema = registry.register('CheckSMTP', CHECK_SMTP);

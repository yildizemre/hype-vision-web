import i18n from '../i18n';

const CONTACT_INBOX = import.meta.env.VITE_CONTACT_EMAIL || 'info@hypevisionlab.com';
const NEWSLETTER_INBOX =
  import.meta.env.VITE_NEWSLETTER_EMAIL || 'info@hypevisionlab.com';

type FormsubmitResponse = {
  success?: string;
  message?: string;
};

async function submitToFormsubmit(
  inbox: string,
  payload: Record<string, string>
): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _captcha: 'false',
        _template: 'table',
        ...payload,
      }),
    });

    const data = (await res.json()) as FormsubmitResponse;

    if (res.ok && data.success) {
      return { ok: true, message: i18n.t('common.forms.success') };
    }

    return {
      ok: false,
      message: data.message || i18n.t('common.forms.errorSend'),
    };
  } catch {
    return {
      ok: false,
      message: i18n.t('common.forms.errorConnection'),
    };
  }
}

export type ContactFormPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  focus: string;
  message: string;
};

export async function submitContactForm(data: ContactFormPayload) {
  return submitToFormsubmit(CONTACT_INBOX, {
    _subject: `${i18n.t('common.forms.contactSubject')} ${data.company || data.name}`,
    Ad_Soyad: data.name,
    Firma: data.company,
    Telefon: data.phone,
    'Ziyaretçi E-postası': data.email || i18n.t('common.forms.fields.notSpecified'),
    'İlgi Alanı': data.focus || i18n.t('common.forms.fields.notSpecified'),
    Not: data.message || '—',
    _form: i18n.t('common.forms.contactForm'),
  });
}

export async function submitNewsletter(email: string) {
  return submitToFormsubmit(NEWSLETTER_INBOX, {
    _subject: i18n.t('common.forms.newsletterSubject'),
    'Abone E-postası': email,
    _form: i18n.t('common.forms.newsletterForm'),
  });
}

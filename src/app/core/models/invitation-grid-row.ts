import { InvitationProfile } from './invitation-profile';

export interface InvitationGridRow {
  profile: InvitationProfile;
  motives: string;
  status_invited: string;
  status_completed: string;
  status_reminders?: string[];
}

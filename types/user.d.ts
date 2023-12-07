interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface UserData {
  data: User[];
}

interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

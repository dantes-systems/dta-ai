// Types related to MongoDB schemas and database operations

interface UserDocument {
  _id: string;           // Telegram user ID
  username: string;
  registry: {
    isReg: boolean;
    regOn: Date;
  };
  membership: {
    status: "active" | "inactive";
    planName: "newbie" | "iron" | "diamond" | "platinum" | "bedrock";
    startedOn: Date;
    endsOn: Date;
  };
  usage: {
    imageGeneration: {
      gImages: number;
      tImages: number;
      cImages: number;
    };
    aiResponse: {
      questionsAsked: number;
      codingProblemsSolved: number;
    };
  };
  settings: {
    language: string;
    notifications: {
      onSuccess: boolean;
      onError: boolean;
      onMembershipExpiration: boolean;
    };
  };
  lastActive: Date;
}

interface SessionDocument {
  userId: string;
  sessionData: Record<string, any>;
  createdAt: Date;
  expiresAt: Date;
}
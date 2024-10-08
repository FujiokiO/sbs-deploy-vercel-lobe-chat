/* eslint-disable sort-keys-fix/sort-keys-fix */
import { z } from 'zod';

export const FeatureFlagsSchema = z.object({
  /**
   *
   */
  webrtc_sync: z.boolean().optional(),
  check_updates: z.boolean().optional(),

  // settings
  language_model_settings: z.boolean().optional(),

  openai_api_key: z.boolean().optional(),
  openai_proxy_url: z.boolean().optional(),

  create_session: z.boolean().optional(),
  edit_agent: z.boolean().optional(),

  dalle: z.boolean().optional(),
  speech_to_text: z.boolean().optional(),
  token_counter: z.boolean().optional(),

  welcome_suggest: z.boolean().optional(),

  clerk_sign_up: z.boolean().optional(),

  market: z.boolean().optional(),
  knowledge_base: z.boolean().optional(),

  rag_eval: z.boolean().optional(),

  // internal flag
  cloud_promotion: z.boolean().optional(),
});

export type IFeatureFlags = z.infer<typeof FeatureFlagsSchema>;

export const DEFAULT_FEATURE_FLAGS: IFeatureFlags = {
  webrtc_sync: false,

  language_model_settings: true,

  openai_api_key: true,
  openai_proxy_url: true,

  create_session: true,
  edit_agent: true,

  dalle: true,

  check_updates: true,
  welcome_suggest: true,

  knowledge_base: true,
  rag_eval: false,

  clerk_sign_up: true,

  cloud_promotion: false,

  market: true,
  speech_to_text: true,
};

export const mapFeatureFlagsEnvToState = (config: IFeatureFlags) => {
  return {
    enableWebrtc: config.webrtc_sync,
    isAgentEditable: config.edit_agent,

    showCreateSession: config.create_session,
    showLLM: config.language_model_settings,

    showOpenAIApiKey: config.openai_api_key,
    showOpenAIProxyUrl: config.openai_proxy_url,

    showDalle: config.dalle,

    enableCheckUpdates: config.check_updates,
    showWelcomeSuggest: config.welcome_suggest,

    enableClerkSignUp: config.clerk_sign_up,

    enableKnowledgeBase: config.knowledge_base,
    enableRAGEval: config.rag_eval,

    showCloudPromotion: config.cloud_promotion,

    showMarket: config.market,
    enableSTT: config.speech_to_text,
  };
};

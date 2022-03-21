import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mukosoft.mucomed",
  appName: "mukosoft",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#003e3e",
    },
    PushNotifications: {
      presentationOptions: ["alert", "sound"],
    },
  },
};

export default config;

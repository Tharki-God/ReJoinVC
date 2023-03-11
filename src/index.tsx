import { Injector, Logger, common, components, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("ReJoinVC");
export const SettingValues = await settings.init("Tharki.ReJoinVC", defaultSettings);
export const { fluxDispatcher: FluxDispatcher, contextMenu: ContextMenuApi } = common;
export const { ContextMenu } = components;
export const disapperTimeouts = new Set<ReturnType<typeof setTimeout>>();
import { addListeners, removeListeners } from "./listeners/index";

export const start = (): void => {
  registerSettings();
  addListeners();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  removeListeners();
};
export { Settings } from "./Components/Settings.jsx";
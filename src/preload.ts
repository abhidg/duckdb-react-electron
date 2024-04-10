// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

import { API } from "./api";

contextBridge.exposeInMainWorld("api", {
  runSQL: (query: string) => ipcRenderer.invoke("run-sql", query),
});

declare global {
  interface Window {
    api: API;
  }
}

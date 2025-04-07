import "./App.css";
import { RuleManager } from "./components/features/RuleManager";
import { Switch } from "./components/ui/Switch";
import { useState } from "react";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <Switch isSelected={isEnabled} onChange={setIsEnabled}>
              Enable feature
            </Switch>
            <p className="mt-2 text-sm text-gray-600">
              Feature is currently {isEnabled ? "enabled" : "disabled"}
            </p>
          </div>
          <RuleManager />
        </div>
      </div>
    </div>
  );
}

export default App;

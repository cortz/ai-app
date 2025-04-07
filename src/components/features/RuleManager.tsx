import { useState } from "react";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import type { RuleSelection } from "../../types/rules";
import { DEFAULT_RULES } from "../../data/rules";

export function RuleManager() {
  const [selectedRules, setSelectedRules] = useState<RuleSelection>({});

  const handleRuleToggle = (ruleId: string) => {
    setSelectedRules((prev) => ({
      ...prev,
      [ruleId]: !prev[ruleId],
    }));
  };

  const handleDownload = () => {
    const selectedContent = DEFAULT_RULES.filter(
      (rule) => selectedRules[rule.id]
    )
      .map((rule) => rule.content)
      .join("\n\n");

    if (!selectedContent) {
      alert("Please select at least one rule to download.");
      return;
    }

    const blob = new Blob([selectedContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-rules.mdc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-6 lg:px-8 py-12">
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Coding Rules
          </h1>
          <p className="text-lg text-gray-600">
            Select the rules you want to include in your project
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1920px] mx-auto px-4">
          {DEFAULT_RULES.map((rule) => {
            const isSelected = selectedRules[rule.id];
            return (
              <div
                key={rule.id}
                className={`h-full p-6 border-2 rounded-xl bg-white transition-all duration-200 ${
                  isSelected
                    ? "border-primary-500 shadow-md ring-2 ring-primary-200"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <Checkbox
                  isSelected={isSelected}
                  onChange={() => handleRuleToggle(rule.id)}
                  className="w-full h-full"
                >
                  <div className="flex items-start h-full">
                    <div className="flex-grow min-w-0">
                      <div className="text-lg font-semibold text-gray-900 mb-2">
                        {rule.name}
                      </div>
                      <div className="text-gray-600 break-words">
                        {rule.description}
                      </div>
                    </div>
                    <div
                      className={`ml-4 p-2 rounded-full shrink-0 transition-colors ${
                        isSelected
                          ? "bg-primary-50 text-primary-600"
                          : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Checkbox>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onPress={handleDownload}
            isDisabled={!Object.values(selectedRules).some(Boolean)}
            className="px-8 py-3 text-lg"
          >
            Download Selected Rules
          </Button>
        </div>
      </div>
    </div>
  );
}

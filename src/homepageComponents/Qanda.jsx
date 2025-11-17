import {useState,React } from "react";
import x from "../assets/x.svg";
const Qanda = ({id,question,ans}) => {

 const [isSelected, setIsSelected] = useState(null);
 const [showAll, setShowAll] = useState(false);
 const handleIsSelected=(id)=>{
  setIsSelected((prev) => (prev === id ? null : id));
 }

 const faqs  = [
  {
    id: "1",
    question:
      "How does StackGuard ensure fast scanning without compromising accuracy?",
    answer:
      "StackGuard’s engine uses AI-based token classification, heuristic pattern matching, and entropy analysis to efficiently scan your infrastructure (e.g. code repositories, cloud Infrastructure, storage, and SaaS applications) while maintaining high detection accuracy.",
  },
  {
    id: "2",
    question: "How does StackGuard handle different types of secrets?",
    answer:
      "StackGuard can detect a wide range of secrets, including API keys, access tokens, service accounts, database credentials, and more.",
  },
  {
    id: "3",
    question: "Can StackGuard detect live tokens?",
    answer:
      "Yes, StackGuard’s proprietary algorithms can detect and analyze live tokens and API keys in production - and can determine and continuously monitor their usage patterns, attack paths, blast radii, associated permissions, and other properties. This enables you to prioritize active threats over false positives.",
  },
  {
    id: "4",
    question:
      "Does StackGuard work across multi-cloud, hybrid, and on-premise environments?",
    answer:
      "Yes, StackGuard can discover, remediate and govern NHI sprawl across your infrastructure - in code repositories, storage locations, applications, and more - whether in the cloud, hybrid, or on-premise environments.",
  },
  {
    id: "5",
    question: "Can StackGuard be integrated into existing CI/CD pipelines?",
    answer:
      "Yes, StackGuard integrates seamlessly with GitHub, GitLab, and Bitbucket - allowing it to scan your repositories and Pull Requests (PRs) directly within your CI/CD pipeline. Detected Non-Human Identities can then be resolved using manual and AI-based remediation methods.",
  },
  {
    id: "6",
    question: "What happens if a critical issue is detected in a Pull Request?",
    answer:
      "StackGuard can automatically fail the Pull Requests (PRs) and enforce security policies, ensuring vulnerabilities are resolved before code merging.",
  },
  {
    id: "7",
    question: "Does StackGuard offer real-time alerts?",
    answer:
      "Yes. StackGuard can send instant alerts via Slack, Microsoft Teams, email, SIEM integrations, and many other tools - so security teams can take immediate action on critical exposures.",
  },
  {
    id: "8",
    question:
      "How is StackGuard ensuring sensitive and confidential information on discovered NHIs (i.e. tokens and API keys) are not shared on any cloud dashboard or platform?",
    answer:
      "The entire StackGuard solution stack is deployed locally or on a private VPC in your environment. No sensitive data can leave your infrastructure.",
  },
  {
    id: "9",
    question: "What is the performance impact of StackGuard scanning?",
    answer:
      "StackGuard is designed for parallelized, incremental scanning, ensuring production workloads remain unaffected while still achieving comprehensive coverage.",
  },
  {
    id: "10",
    question: "Can StackGuard assist in compliance reporting?",
    answer:
      "Yes. StackGuard generates detailed, audit-ready compliance reports that map NHI findings and remediation actions to frameworks such as SOC 2, ISO 27001, PCI DSS, HIPAA, and others.",
  },
  {
    id: "11",
    question: "How quickly can StackGuard be deployed and operational?",
    answer:
      "Most customers achieve full deployment within minutes, not days. StackGuard offers guided onboarding, automated discovery, and pre-built integrations - allowing you to see results on day one without major process overhauls.",
  },
  {
    id: "12",
    question: "What is the ROI of implementing StackGuard?",
    answer:
      "By proactively eliminating unused, over-privileged, and exposed NHIs, StackGuard reduces breach likelihood, lowers incident response costs, and strengthens compliance. This often pays for itself within days - including through avoided security breaches, zero downtime, and saved security fines, not to mention the priceless benefit of preserving brand reputation. With such minimal Total Cost of Ownership (TCO), the final cost-benefit analysis is a clear business no-brainer.",
  },
  {
    id: "13",
    question:
      "How is StackGuard different from any other NHI solution provider?",
    answer:
      "A few key differentiators are StackGuard's proprietary Deep Scan Technology, contextual and runtime NHI visibility, AI-based remediation, Service accounts, Cloud infrastructure scanning, Attack path analysis, NHI Inventory, NHI Governance, Connectors and integration capabilities, local deployment within your own environment and many more.",
  },
];

   const itemsToShow = showAll ? faqs : faqs.slice(0, 5);
 
    return (
    <div>
      <ul className="space-y-3">
        {itemsToShow.map((item) => (
          <li
            key={item.id}
            className={`pl-4 pr-1 py-3 rounded-3xl w-full 
              ${
                isSelected === item.id
                  ? "bg-white border border-[#0000001C]"
                  : "bg-[#F8F0FFA6] border border-[#E8D1FF]"
              }`}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-[22px] w-[90%] text-[#454545] font-medium">
                {item.question}
              </h1>

              <button
                className="w-fit text-4xl"
                onClick={()=>handleIsSelected(item.id)}
                type="button"
              >
                <img
                  className={`p-2 rounded-full ${
                    isSelected === item.id ? "bg-[#F5EAFF]" : "bg-white"
                  }`}
                  src={x}
                  alt="toggle"
                />
              </button>
            </div>

            {isSelected === item.id && (
              <p className="mt-4 text-[18px] text-[#454545]">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShowAll(!showAll)}
        className=" ml-3 text-[#454545] font-medium mt-4"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};


export default Qanda;

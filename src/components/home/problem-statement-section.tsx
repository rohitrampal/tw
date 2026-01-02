import { AlertCircle, TrendingDown, EyeOff, DollarSign, Users, Flame } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    text: 'Inconsistent execution despite brilliant ideas?',
  },
  {
    icon: TrendingDown,
    text: 'Operational inefficiencies causing revenue leakage?',
  },
  {
    icon: EyeOff,
    text: 'Lack of real-time governance visibility and accountability?',
  },
  {
    icon: DollarSign,
    text: 'Costly full-time leadership hires beyond your budget?',
  },
  {
    icon: Users,
    text: 'Difficulty scaling processes and teams?',
  },
  {
    icon: Flame,
    text: 'Frequent firefighting without root cause resolution?',
  },
];

export function ProblemStatementSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-h2 text-center mb-12">
          Is Your Business Struggling With...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="card flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-teal-500" aria-hidden="true" />
                </div>
                <p className="body-default text-navy-500 flex-1">{problem.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


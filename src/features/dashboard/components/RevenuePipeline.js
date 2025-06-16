import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FileText, Edit3, ShieldAlert, ChevronRight } from 'lucide-react';

// --- HELPER FUNCTION ---
const formatCurrency = (value) => {
  if (typeof value === 'string') {
    // If value is already a formatted string like '$145,200', return it
    if (value.startsWith('$')) return value;
    // Otherwise, format it
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  // If value is a number, format it
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// --- SUB-COMPONENTS ---

// 1. PipelineItem: Renders a single category row
const PipelineItem = ({ item }) => {
  const colorClasses = {
    iconContainer: {
      blue: 'bg-blue-100/50 text-blue-600',
      yellow: 'bg-yellow-100/50 text-yellow-600',
      red: 'bg-red-100/50 text-red-600',
    },
  };

  return (
    <div className="group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ease-in-out cursor-pointer hover:bg-gray-50">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${colorClasses.iconContainer[item.color]}`}>
          {item.icon}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-500">{item.count} Orders</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-semibold text-gray-800 text-lg">{formatCurrency(item.value)}</p>
        <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" size={20} />
      </div>
    </div>
  );
};

// 2. ProgressBar: Renders the segmented progress bar and legend
const ProgressBar = ({ total, categories }) => {
    const colorClasses = {
        bar: {
          blue: 'bg-blue-500',
          yellow: 'bg-yellow-500',
          red: 'bg-red-500',
        }
    };

  return (
    <div className="space-y-3">
      <div className="flex w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        {categories.map((cat) => {
          const percentage = (cat.value / total) * 100;
          return (
            <div
              key={cat.id}
              style={{ width: `${percentage}%` }}
              className={`h-full ${colorClasses.bar[cat.color]} transition-all duration-500 ease-out`}
            />
          );
        })}
      </div>
       <div className="flex items-center justify-between md:justify-start md:gap-6 text-sm text-gray-600">
          {categories.map((cat) => (
                <div key={cat.id} className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${colorClasses.bar[cat.color]}`}></div>
                    <span>{cat.title}</span>
                </div>
              )
          )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
// RevenuePipeline: The main dashboard widget container
const RevenuePipeline = ({ data }) => {
  // Provide default values if data is missing or incomplete
  const safeData = useMemo(() => data || {
    currentMonth: 'Current Month',
    readyToBill: { 
      count: 0, 
      value: '$0', 
      description: 'Orders ready to bill',
      byMonth: { 'Current Month': { count: 0, value: '$0' } }
    },
    draftInvoices: { 
      count: 0, 
      value: '$0', 
      description: 'Invoices in draft state',
      byMonth: { 'Current Month': { count: 0, value: '$0' } }
    },
    disputedInvoices: { 
      count: 0, 
      value: '$0', 
      description: 'Invoices in disputed state',
      byMonth: { 'Current Month': { count: 0, value: '$0' } }
    }
  }, [data]);

  // Transform the data from the format in mockData to the format needed by this component
  const transformedData = useMemo(() => {
    const currentMonth = safeData.currentMonth;

    // Calculate total pipeline value
    const totalPipeline = Object.entries(safeData)
      .filter(([key]) => ['readyToBill', 'draftInvoices', 'disputedInvoices'].includes(key))
      .reduce((sum, [/* key - unused */, item]) => {
        const value = item.byMonth[currentMonth]?.value || '$0';
        return sum + parseInt(value.replace(/[$,]/g, ''), 10);
      }, 0);

    // Create categories array
    const categories = [
      {
        id: 1,
        title: 'Ready to Bill',
        count: safeData.readyToBill?.byMonth[currentMonth]?.count || 0,
        value: parseInt(safeData.readyToBill?.byMonth[currentMonth]?.value?.replace(/[$,]/g, '') || 0, 10),
        icon: <FileText size={20} />,
        color: 'blue',
      },
      {
        id: 2,
        title: 'Draft Invoices',
        count: safeData.draftInvoices?.byMonth[currentMonth]?.count || 0,
        value: parseInt(safeData.draftInvoices?.byMonth[currentMonth]?.value?.replace(/[$,]/g, '') || 0, 10),
        icon: <Edit3 size={20} />,
        color: 'yellow',
      },
      {
        id: 3,
        title: 'Disputed Invoices',
        count: safeData.disputedInvoices?.byMonth[currentMonth]?.count || 0,
        value: parseInt(safeData.disputedInvoices?.byMonth[currentMonth]?.value?.replace(/[$,]/g, '') || 0, 10),
        icon: <ShieldAlert size={20} />,
        color: 'red',
      },
    ];

    return { totalPipeline, categories };
  }, [safeData]);

  return (
    <div className="w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 p-6 border border-white/20">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Action Queue</h2>
          <p className="text-4xl font-bold text-gray-900 tracking-tight mt-4">
            {formatCurrency(transformedData.totalPipeline)}{' '}
            <span className="text-base font-medium text-gray-500">in pipeline</span>
          </p>
        </div>

        <ProgressBar total={transformedData.totalPipeline} categories={transformedData.categories} />

        <div className="space-y-2 border-t border-gray-200 pt-4">
          {transformedData.categories.map((item) => (
            <PipelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// PropTypes for PipelineItem component
PipelineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
};

// PropTypes for ProgressBar component
ProgressBar.propTypes = {
  total: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
};

// PropTypes for RevenuePipeline component
RevenuePipeline.propTypes = {
  data: PropTypes.shape({
    currentMonth: PropTypes.string,
    readyToBill: PropTypes.object,
    draftInvoices: PropTypes.object,
    disputedInvoices: PropTypes.object
  })
};

RevenuePipeline.defaultProps = {
  data: null
};

export default RevenuePipeline;

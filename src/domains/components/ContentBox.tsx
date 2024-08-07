type ContentBoxProps = {
  title?: string;
  children: React.ReactNode;
  isLoading?: boolean;
};
const ContentBox = ({ title, isLoading, children }: ContentBoxProps) => (
  <div className={"rounded-sm overflow-hidden bg-white relative"}>
    {title && (
      <div className="bg-primary px-4 py-3">
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
    )}
    {isLoading && (
      <div className="w-full absolute">
        <div className="h-1.5 w-full bg-slate-400 overflow-hidden">
          <div className="progress w-full h-full bg-slate-600 left-right" />
        </div>
      </div>
    )}
    <div className="p-4">{children}</div>
  </div>
);

export { ContentBox };

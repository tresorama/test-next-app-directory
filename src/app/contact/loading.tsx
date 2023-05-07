import cx from 'classnames';
import { type HTMLAttributes } from 'react';

const Pulsing = ({ children, className }: { children: React.ReactNode, className?: HTMLAttributes<HTMLElement>['className']; }) => (
  <div className={cx('bg-gray-500 animate-pulse inline-block', className)}>
    <div className='invisible inline-block'>
      {children}
    </div>
  </div>
);

export default function Loading() {
  const repeat = (times: number) => new Array(times).fill('');
  return (
    <div className="px-4">
      <div className="px-8 py-12 bg-zinc-900">
        <Pulsing className="mb-8">
          <span className='font-semibold text-4xl'>Placeholder</span>
        </Pulsing>
        <div className="flex flex-col items-start gap-4">
          {repeat(2).map((_, index) => (
            <Pulsing key={index}>
              <div className="w-56">Item</div>
            </Pulsing>
          ))}
        </div>
      </div>
    </div>
  );
}
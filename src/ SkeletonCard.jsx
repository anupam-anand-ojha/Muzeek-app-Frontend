import React from 'react'

function SkeletonCard() {
  return (
    <div className="card bg-base-200 shadow-xl border border-base-300 overflow-hidden">
      <figure className="p-4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-base-300">
          <div className="absolute inset-0 shimmer"></div>
        </div>
      </figure>

      <div className="card-body pt-0">
        <div className="h-4 w-3/4 rounded-full bg-base-300 relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
        </div>

        <div className="h-3 w-1/2 rounded-full bg-base-300 relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
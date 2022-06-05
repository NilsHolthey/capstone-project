import React from 'react';
import dynamic from 'next/dynamic';
const OverviewGrid = dynamic(() => import('../src/components/Overview/OverviewGrid'), {
	ssr: false,
});

export default function Overview() {
	return <OverviewGrid />;
}

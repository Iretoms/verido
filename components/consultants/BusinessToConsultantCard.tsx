import React from 'react'
import { Consultant } from '@/types'
interface ConsultantInfoCardProps {
  consultant: Consultant;
}

const BusinessToConsultantCard: React.FC<ConsultantInfoCardProps> = ({
  consultant,
}) => {
  return <div>BusinessToConsultantCard</div>;
};

export default BusinessToConsultantCard
import prisma from '../services/db';

export const getServices = async (req, res) => {
  const services = await prisma.service.findMany({
    include: {
      triggers: true,
      actions: true,
    },
  });

  res.json(services);
};

export const getService = async (req, res) => {
  const service = await prisma.service.findUnique({
    where: { id: +req.params.id },
    include: {
      triggers: true,
      actions: true,
    },
  });

  res.json(service);
};

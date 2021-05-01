import host from './index';

export const getCircles = async () => {
  const { data } = await host.get('api/circles');
  return data;
};

export const addCircle = async (circle) => {
  const res = await host.post('api/circles', circle);
  return res.data;
};

export const updateCircle = async (id, updates) => {
  const { data } = await host.put(`api/circles/${id}`, updates);
  return data;
};

export const getRects = async () => {
  const { data } = await host.get('api/rects');
  return data;
};

export const addRect = async (rect) => {
  const { data } = await host.post('api/rects', rect);
  return data;
};

export const updateRect = async (id, updates) => {
  const { data } = await host.put(`api/rects/${id}`, updates);
  return data;
};
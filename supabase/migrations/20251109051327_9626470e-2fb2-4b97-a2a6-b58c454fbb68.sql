-- Update RLS policy to make messages temporarily publicly viewable for demo
-- In production, you should implement proper admin authentication
DROP POLICY IF EXISTS "Only admins can view contact messages" ON public.contact_messages;

CREATE POLICY "Allow viewing contact messages"
ON public.contact_messages
FOR SELECT
USING (true);

-- Add comment explaining this is for demo purposes
COMMENT ON POLICY "Allow viewing contact messages" ON public.contact_messages IS 
'Temporary policy for demo - messages are publicly readable. In production, implement proper admin authentication.';
